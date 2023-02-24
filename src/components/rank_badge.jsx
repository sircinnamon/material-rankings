import RANKS from "../data/ranks"
import React from "react"

function RankBadge(props){
	let determineBestRank = function(rankList){
		let best = rankList[0]
		for (var i = 1; i < rankList.length; i++) {
			if(RANKS[rankList[i]].value > RANKS[best].value){
				best = rankList[i]
			}
		}
		return best
	}
	let rank
	if(Array.isArray(props.ranks)){
		rank = determineBestRank(props.ranks)
	} else {
		rank = props.ranks
	}

	return (
		<div>
			{rank}
			<pre>{RANKS[rank]}</pre>
		</div>
	)
}

export default RankBadge