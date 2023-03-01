import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdomnButton, TaskInput } from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm()

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

