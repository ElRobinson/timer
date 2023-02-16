import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdomnButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Work in</label>
          <TaskInput id="task" placeholder="Project name" />

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdomnButton disabled type="submit">
          <Play size={24} />
          Start
        </StartCountdomnButton>
      </form>
    </HomeContainer>
  )
}
