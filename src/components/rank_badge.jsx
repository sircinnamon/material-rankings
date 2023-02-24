import RANKS from "../data/ranks"
import React from "react"

import STONE_ICON from "../svg/stone.svg"
import IRON_ICON from "../svg/iron.svg"
import BRONZE_ICON from "../svg/bronze.svg"
import SILVER_ICON from "../svg/silver.svg"
import GOLD_ICON from "../svg/gold.svg"
import PLATINUM_ICON from "../svg/platinum.svg"
import AMETHYST_ICON from "../svg/amethyst.svg"
import SAPPHIRE_ICON from "../svg/sapphire.svg"
import RUBY_ICON from "../svg/ruby.svg"
import EMERALD_ICON from "../svg/emerald.svg"
import OBSIDIAN_ICON from "../svg/obsidian.svg"
import DIAMOND_ICON from "../svg/diamond.svg"

function RankBadge(props){

	const ICON_MAP = {
		stone: STONE_ICON,
		iron: IRON_ICON,
		bronze: BRONZE_ICON,
		silver: SILVER_ICON,
		gold: GOLD_ICON,
		platinum: PLATINUM_ICON,
		amethyst: AMETHYST_ICON,
		sapphire: SAPPHIRE_ICON,
		ruby: RUBY_ICON,
		emerald: EMERALD_ICON,
		obsidian: OBSIDIAN_ICON,
		diamond: DIAMOND_ICON
	}
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
			<pre>{JSON.stringify(RANKS[rank])}</pre>
			<img src={ICON_MAP[rank]} />
		</div>
	)
}

export default RankBadge