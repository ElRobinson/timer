import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdomnButton, TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Set the task'),
  minutesAmount: zod.number().min(5, 'time must be at least 5 min').max(60, 'time must be at max 60 min'),
}) 

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch('task');
  const isSubmitedDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Work in</label>
          <TaskInput
           id="task"
           list="task-suggestions"
           placeholder="Project name"
           {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
           type="number" 
           id="minutesAmount"
           placeholder="00"
           step={5}
           min={5}
           max={60}
           {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdomnButton disabled={isSubmitedDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdomnButton>
      </form>
    </HomeContainer>
  )
}

