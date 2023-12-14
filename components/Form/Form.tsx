'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classnames from 'classnames';

import { FormProps, FormInputs, IFormBuildingData } from './Form.props';

import { sendDataToTelegram } from '@/utils/sendDataToTelegram';
import { sendDataToGoogleSheets } from '@/utils/sendDataToGoogleSheets';
import formBuildingData from '@/data/formBuildingData.json';
import { showToast } from '@/utils/showToast';

import {
  FormInput,
  FormTextarea,
  FormCheckbox,
  SubmitButton,
} from '@/components';

import { FORM_DATA_KEY } from '@/constants';
import { IDataToSend } from '@/types';
import Script from 'next/script';

const Form: FC<FormProps> = ({ staticData, className = '' }) => {
  const { input, textarea, checkbox, button, toastMessage } = staticData;
  const { sendText, sentText, loadingText, errorText } = button;
  const {
    options: { name, phone, message, agree },
  } = formBuildingData as IFormBuildingData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonCurrentText, setButtonCurrentText] = useState<string>(sendText);
  const [isLead, seIsLead] = useState<boolean>(false);

  const {
    register,
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const buttonClass = classnames(
    { 'text-notify-disabled': isLoading },
    {
      'text-notify-success': buttonCurrentText === sentText,
    },
    {
      'text-notify-error': buttonCurrentText === errorText,
    },
    'mx-auto md:mx-0 md:ml-auto xl:ml-0 xl:mr-auto',
  );

  const onSubmit: SubmitHandler<FormInputs> = async (formData: FormInputs) => {
    const sendData = async (formData: FormInputs) => {
      let dataToSend = {};
      for (let key in formData) {
        if (key !== 'userAgree') dataToSend[key] = formData[key];
      }

      try {
        await sendDataToTelegram(dataToSend as IDataToSend);
        await sendDataToGoogleSheets(dataToSend as IDataToSend);
        return true;
      } catch (error) {
        return false;
      }
    };

    try {
      setIsLoading(true);
      const isSuccess: boolean = await sendData(formData);
      const buttonCurrentText = isSuccess ? sentText : errorText;
      setButtonCurrentText(buttonCurrentText);

      setTimeout(() => {
        setButtonCurrentText(sendText);
      }, 3000);

      if (isSuccess) {
        reset();
      }

      if (typeof document !== 'undefined') {
        const submitButton = document?.getElementById('submitButton');
        submitButton && submitButton.blur();
      }
      seIsLead(true);
      showToast(isSuccess, toastMessage);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="consultationForm"
      className={className}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        staticData={input.name}
        register={register}
        errors={errors}
        options={name}
      />
      <FormInput
        staticData={input.phone}
        register={register}
        errors={errors}
        options={phone}
      />
      <FormTextarea
        staticData={textarea}
        register={register}
        errors={errors}
        options={message}
      />
      <FormCheckbox
        staticData={checkbox}
        errors={errors}
        control={control}
        isChecked={!!watch().userAgree}
        options={agree}
      />
      <SubmitButton className={buttonClass} disabled={isLoading}>
        {isLoading ? loadingText : buttonCurrentText}
      </SubmitButton>

      {isLead && (
        <>
          <Script id="pixel-fb">
            {`!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1064048701288094');
  fbq('track', 'PageView');
  fbq('track', 'Lead')`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1064048701288094&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      )}
    </form>
  );
};

export default Form;
