class GameState {
    constructor() {
        this.states = [
            "inProgress",
            "end"
        ]
        this.currentState = this.states[0];
    }

    handleState() {
        const stateLength = this.states.length;
        const currentIndexOfState = this.states.findIndex((state) => {
            return (state === this.currentState);
        })
        if(currentIndexOfState < stateLength - 1) {
            this.currentState = this.states[currentIndexOfState + 1];
            return;
        }
        this.currentState = this.states[0];
    }

    get currentStateOfGame() {
        return this.currentState;
    }
}

export default new GameState;