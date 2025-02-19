'use client';

import { Flex, Progress } from 'antd';
import s from './ClientPage.module.scss';
import { twoColors } from '@/shared/utils/constData';
import { QUESTIONS } from '@/shared/constants/questions';
import { lazy, Suspense, useState } from 'react';
import { UserName, UserAge, UserLocation, UserStack, UserProject, UserLanguage, UserAbout, UserEducation, UserExperience, UserAvatar, UserDirection, UserOthers } from '@/features/ResumeForm/components';
import { useFormContext } from 'react-hook-form';
import { validationRulesForm } from '@/features/ResumeForm/model/validationRulesForm';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Metadata } from 'next';
import UserConnection from '@/features/ResumeForm/components/UserConnection';
import { fonts } from '@/shared/fonts/fonts';

const ClientPage = () => {
  const PreviewResume = lazy(() => import('@/features/PreviewResume/PreviewResume'));
  const { control, handleSubmit } = useFormContext();
  const [step, setStep] = useState<number>(0);

  const percentage = Math.round((step + 1) / QUESTIONS.length * 100);
  const question = QUESTIONS[step];
  const rules = validationRulesForm()

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const isButtonVisible = rules[step] ? rules[step]() : false;
  const font = fonts.montserratAlternates;

  const renderStepComponent = (step: number) => {
    const stepComponents = [
      <UserDirection control={control} />,
      <UserName control={control} />,
      <UserAge control={control} />,
      <UserLocation control={control} />,
      <UserEducation control={control} />,
      <UserStack control={control} />,
      <UserExperience control={control} step={step} setStep={setStep} />,
      <UserProject control={control} step={step} setStep={setStep} />,
      <UserLanguage control={control} step={step} setStep={setStep} />,
      <UserConnection control={control} step={step} setStep={setStep}/>,
      <UserAvatar control={control} />,
      <UserAbout control={control} />,
      <UserOthers control={control} />
    ];

    return stepComponents[step]
  }

  return (
      <div className={`${s.wrapper} ${font}`}>
        <Flex vertical gap="middle" className={s.progress__bar}>
          <Progress percent={percentage} strokeColor={twoColors} showInfo={false} />
            {step > 0 && step < QUESTIONS.length && <svg style={{marginBottom: 10}} onClick={() => setStep(step - 1)} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fillRule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"></path> </g></svg>}
        </Flex>
        {step >= QUESTIONS.length ? (
          <Suspense fallback={<Loader />}>
              <PreviewResume step={step} setStep={setStep} />
          </Suspense>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} style={step == 0 ? {minHeight: '75vh'} : {minHeight: '60vh'}}>
            {step >= QUESTIONS.length - 1 && <h2 style={{marginBottom: 20}}>Остался последний шаг!</h2>}
            <h2 className={s.question} key={step}>{question.title}</h2>

            {renderStepComponent(step)}

            <button
              className={`${s.button__next} ${isButtonVisible ? s.visible : s.hidden}`}

              onClick={handleSubmit((data) => {
                console.log(data);
                setStep(step + 1);
              })}
              disabled={!isButtonVisible}
            >
              ДАЛЕЕ
            </button> 
      </form>
        )}
      </div>
  );
}

export default ClientPage;