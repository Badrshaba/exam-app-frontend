"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnswerFields, ExamSchema } from "@/lib/schemes/exam.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import ExamDuration from "./exam-duration";
import useCheckQuestions from "../_hooks/use-check-questions";

type QuestionsFormProps = {
  questions: Question[];
};

export default function QuestionsForm({ questions }: QuestionsFormProps) {
  // State
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");

  // Mutation
  const { isPending, checkQuestions } = useCheckQuestions();

  // Variables
  const currentQuestion = questions[step];

  // Form
  const form = useForm<AnswerFields>({
    resolver: zodResolver(ExamSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<AnswerFields> = (values) => {
    checkQuestions(values, {
      onSuccess: (data) => {
        data.WrongQuestions.forEach((question) => {
          let questionIndex: number | null = null;

          form.getValues("answers").find((answer, i) => {
            if (answer.questionId === question.QID) {
              questionIndex = i;
              return true;
            } else {
              return false;
            }
          });

          if (questionIndex) {
            form.setError(`answers.${questionIndex}`, {
              message: question.correctAnswer,
            });
          }
        });
      },
    });
  };

  return (
    <div className="flex flex-col gap-4 grow">
      {/* Header */}
      <header className="flex items-center justify-between">
        {/* Question number */}
        <p className="text-sm text-blue-600">
          Question {step + 1} of {questions.length}
        </p>

        {/* Duration */}
        <ExamDuration
          duration={questions[step].exam.duration}
          onTimechange={(date) => form.setValue("time", date.getMinutes())}
        />
      </header>

      {/* Steps */}
      <ul className="flex items-center justify-between">
        {Array.from({ length: questions.length }, (_, i) => i).map((i) => (
          <li
            key={i}
            className={cn(
              "size-2 bg-gray-300 rounded-full transition-colors",
              step >= i && "bg-blue-600",
            )}
          />
        ))}
      </ul>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grow flex flex-col">
          <FormField
            control={form.control}
            name={`answers.${step}`}
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel className="text-lg font-semibold">{currentQuestion.question}</FormLabel>

                {/* Options */}
                <FormControl>
                  <RadioGroup
                    disabled={isPending}
                    value={answer}
                    onValueChange={(value) => {
                      setAnswer(value);
                      field.onChange({
                        questionId: currentQuestion._id,
                        correct: value,
                      });
                    }}
                    name={currentQuestion._id}
                    className="flex flex-col space-y-1"
                  >
                    {currentQuestion.answers.map((answer) => (
                      <FormItem
                        key={answer.key}
                        className="flex border p-1 rounded-md items-center space-x-3 space-y-0"
                      >
                        {/* Radio */}
                        <FormControl>
                          <RadioGroupItem value={answer.key} />
                        </FormControl>

                        {/* Label */}
                        <FormLabel className="font-normal grow py-2">{answer.answer}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Footer */}
          <div className="grid grid-cols-2 gap-2 mt-auto">
            {/* Prev */}
            <Button
              type="button"
              disabled={isPending || step === 0}
              onClick={() => {
                const prevAnswer = form.getValues(`answers.${step - 1}`);

                if (!prevAnswer?.correct) {
                  setAnswer("");
                } else {
                  setAnswer(prevAnswer.correct);
                }

                setStep((prev) => prev - 1);
              }}
            >
              Previous
            </Button>

            {/* Next */}
            <Button
              disabled={(() => {
                if (isPending) return true;

                const currentAnswer = form.getValues(`answers.${step}`);

                if (currentAnswer?.correct) return false;

                return true;
              })()}
              type={step < questions.length - 1 ? "button" : "submit"}
              onClick={() => {
                if (step === questions.length - 1) return;

                const nextAnswer = form.getValues(`answers.${step + 1}`);

                if (!nextAnswer?.correct) {
                  setAnswer("");
                } else {
                  setAnswer(nextAnswer.correct);
                }

                setStep((prev) => prev + 1);
              }}
            >
              {isPending ? "Checking your answers..." : "Next"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
