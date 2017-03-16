import React from 'react';
import classNames from 'classnames';

export default React.createClass({
	getPair: function() {
		return this.props.pair || [];
	},
	isDisabled: function () {
		return !!this.props.hasVoted;
	},
	hasVotedFor: function (entry) {
		return this.props.hasVoted === entry;
	},
	render: function() {
		return <div className="voting">
			{this.getPair().map(entry =>
				<button key={entry}
						classNames={classNames({voted: this.hasVotedFor(entry)})}
						disabled={this.isDisabled()}
						onClick={() => this.props.vote(entry)}>
					<h1>{entry}</h1>
					{this.hasVotedFor(entry) ? <div className="label">voted</div> : null}
				</button>
			)}
		</div>;
	}
});