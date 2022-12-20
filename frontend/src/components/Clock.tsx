import React, { useEffect, useState } from 'react';

function Clock() {
    const [timerDays, setTimerDay] = useState(10);
    const [timerHours, setTimerHour] = useState(10);
    const [timerMinutes, setTimerMinute] = useState(10);
    const [timerSeconds, setTimerSecond] = useState(10);

    let interval;
    const timer = () => {
        interval = setInterval(() => {
            const now = new Date();
            setTimerDay(Math.floor(now.getDay()));
            setTimerHour(Math.floor(now.getHours()));
            setTimerMinute(Math.floor(now.getMinutes()));
            setTimerSecond(Math.floor(now.getSeconds()));
        });
    };

    useEffect(() => {
        timer();
    });

    return (
        <>
            <div className="timer-container item-center w-auto h-100 text-center justify-center">
                <section className="timer">
                    <small className="text-shadow text-cyan-300">
                        Current Time
                    </small>
                    <div className="relative m-1 flex justify-center items-center text-cyan-400 text-shadow">
                        <section className="flex flex-col justify-center items-center p-4">
                            <p className="text-2xl">{timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section className="flex flex-col justify-center items-center p-4">
                            <p className="text-2xl">{timerHours}</p>
                            <small>Hours</small>
                        </section>
                        <span>:</span>
                        <section className="flex flex-col justify-center items-center p-4">
                            <p className="text-2xl">{timerMinutes}</p>
                            <small>Minutes</small>
                        </section>
                        <span>:</span>
                        <section className="flex flex-col justify-center items-center p-4">
                            <p className="text-2xl">{timerSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Clock;
