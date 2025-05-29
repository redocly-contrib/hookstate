import React from 'react';
import { useHookstate } from '@redocly/hookstate-core';
import { identifiable } from '@redocly/hookstate-identifiable';

export const ExampleComponent = () => {
    const state = useHookstate(1, identifiable('my-counter'))
    return <>
        <p>Counter: {state.value}</p>
        <p><button onClick={() => state.set(p => p + 1)}>
            Increment the '{state.identifier}' counter
        </button></p>
    </>
}

