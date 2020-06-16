const {getMyAssets} = require('./BigchainDB')

const DarthVader = {privateKey: "DW3iVP1fmkcjxjteJXgVPAWtH8eZ2j2YfdYRfgMtpszs", publicKey: "FB38EfnaSirmdr5LnYzNiYZpE5JhBe5MAK9fW2QFSqey"}
const BobaFett = {privateKey: "BLwwvEmST2qFxuaGNYdwzfiaBHF7NaTgLnKvFxmgzciK", publicKey: "J2DjVNhHux1JFS1TmhVbCzkf7NMJRs3Yq1L85WXPNBao"}
const Greedo = {privateKey: "3rRp4MB4FmZavBEvLzkAtH2pjySrWQjJaF2HhGqVyci2", publicKey: "5seKJNysnBXXPgQhSkGMCZfCrix19a27odNvT6Y1Bkzb"}
const DinDjarin = {privateKey: "3sYVUdZV3AvUkqmDBQbWTvdDRMTHczfdCKTvvwQCvU93", publicKey: "FyA6GSbqpeZGGqWe9TvK3ibk3umbB3c6rZJdsgfM6qcZ"}

getMyAssets(DarthVader, 'weapon').then(myAssets => console.log(myAssets))
// getMyAssets(DarthVader, 'credit').then(myAssets => console.log(myAssets))
// getMyAssets(BobaFett, 'credit').then(myAssets => console.log(myAssets))
// getMyAssets(Greedo, 'credit').then(myAssets => console.log(myAssets))
// getMyAssets(DinDjarin, 'credit').then(myAssets => console.log(myAssets))
