export type ActionType = {
    type: string,
    payload: any
}

export type DispatchType = (args: ActionType) => ActionType