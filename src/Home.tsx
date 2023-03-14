function NewCycleForm() {
    return <h1>New</h1>
}

function Countdown() {
    return <h1>Countdown</h1>
}

export function Home() {
    const activeCycle = 1;

    return (
        <div>
            <NewCycleForm />
            <Countdown />
        </div>
   )
}