var React = require("../lib/react"),
    StartLink = require("./StartLink"),
    State = require("../State");

module.exports = React.createClass({

    render: function() {
        return <div className="board high-scores-board">
            <h1>Incert some highscores here</h1>
            <StartLink />
        </div>
    },

    restart: function() {
        State.Helpers.initializeGame();
    }

});
