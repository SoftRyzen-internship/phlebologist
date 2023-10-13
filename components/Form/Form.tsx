'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classnames from 'classnames';

import { FormProps, FormInputs } from './Form.props';

//TODO import sendDataToTelegram function
//TODO import sendDataToGoogleSheets function
import formBuildingData from '@/data/formBuildingData.json';
import { showToast } from '@/utils/showToast';

import {
  FormInput,
  FormTextarea,
  FormCheckbox,
  SubmitButton,
} from '@/components';

import { FORM_DATA_KEY } from '@/constants';

const Form: FC<FormProps> = ({ staticData, className = '' }) => {
  const { input, textarea, checkbox, button, toastMessage } = staticData;
  const { sendText, sentText, loadingText, errorText } = button;
  const {
    options: { name, phone, message, agree },
  } = formBuildingData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonCurrentText, setButtonCurrentText] = useState<string>(sendText);

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
    const sendDataToTelegram = (formData: FormInputs) => {
      // DELETE this function!
      console.log(formData);
      return Math.random() < 0.5;
    };
    try {
      setIsLoading(true);
      //   const isSuccess: boolean = await sendDataToTelegram(formData);
      const isSuccess: boolean = sendDataToTelegram(formData);
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

      showToast(isSuccess, toastMessage);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={className} noValidate onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

export default Form;
