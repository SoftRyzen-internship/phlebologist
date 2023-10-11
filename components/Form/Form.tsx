'use client';

import { FC, useState, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classnames from 'classnames';

import { FormProps } from './Form.props';

//TODO import sendDataToTelegram function
//TODO import sendDataToGoogleSheets function
// import { FormProps, InputT, FormData } from '@/types';

import {
  FormInput,
  FormTextarea,
  FormCheckbox,
  SubmitButton,
} from '@/components';

const Form: FC<FormProps> = ({ staticData, className = '' }) => {
  const { input, textarea, checkbox, button } = staticData;
  const { sendText, sentText, loadingText, errorText } = button;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [buttonCurrentText, setButtonCurrentText] = useState<string>(sendText);

  const FORM_DATA_KEY = 'form_session_data';

  const {
    register,
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const buttonClass = classnames(
    { 'text-notify-disabled': isLoading },
    { 'text-notify-success': buttonCurrentText === sentText },
    { 'text-notify-error': buttonCurrentText === errorText },
  );

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FormData) => {
    const resolveForm = (isSuccess: boolean): void => {
      setIsLoading(false);
      const buttonCurrentText = isSuccess ? sentText : errorText;
      setButtonCurrentText(buttonCurrentText);
      if (isSuccess) {
        reset();
        sessionStorage.removeItem(FORM_DATA_KEY);
      }
    };

    const sendDataToTelegram = (formData: FormData) => {
      // DELETE this function!
      console.log(formData);
      return Math.random() < 0.5;
    };

    try {
      setIsLoading(true);
      //   const isSuccess: boolean = await sendDataToTelegram(formData);
      const isSuccess: boolean = sendDataToTelegram(formData);
      resolveForm(isSuccess);
    } catch (error) {
      resolveForm(false);
    }
  };

  return (
    <form className={className} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormInput staticData={input.name} register={register} errors={errors} />
      <FormInput staticData={input.phone} register={register} errors={errors} />
      <FormTextarea staticData={textarea} register={register} errors={errors} />
      <FormCheckbox
        staticData={checkbox}
        register={register}
        errors={errors}
        control={control}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
      />
      <SubmitButton className={buttonClass} disabled={isLoading}>
        {isLoading ? loadingText : buttonCurrentText}
      </SubmitButton>
    </form>
  );
};

export default Form;
