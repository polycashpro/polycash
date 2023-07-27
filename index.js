var QUICK_ROUTER = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
var QUICK_ROUTER_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var quick_router;

var ROUTERv1 = "0xfE74Be25FF81B2857983150fbAA5cb626efa13Dd";
var ROUTERv1_ABI = [{"inputs":[{"internalType":"address","name":"_implement","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"AppState","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"FreezeWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_direct_reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_direct_team","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_level_reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_level_team","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_airdropamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_distributeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_reserveamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appState_totalWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"changeAirdropStateWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"changeLevelWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"claimairdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"claimcommision","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"claimreward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimwait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"day","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referree","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"name":"deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"direct_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"distribute","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_flag","type":"bool"}],"name":"flagePermission","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getRefMap","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getairdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implement","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isairdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"matching_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRoiRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"multiclaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"permission","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"records","outputs":[{"internalType":"uint256","name":"tEarn","type":"uint256"},{"internalType":"uint256","name":"tComision","type":"uint256"},{"internalType":"uint256","name":"tMatching","type":"uint256"},{"internalType":"uint256","name":"tWitdrawn","type":"uint256"},{"internalType":"uint256","name":"partner","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referree","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"name":"registerWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unlockMatchingLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"updateAppStateWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"uint256[]","name":"directvalues","type":"uint256[]"},{"internalType":"uint256[]","name":"matchingvalues","type":"uint256[]"}],"name":"updateDeployState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_implement","type":"address"}],"name":"updateImplement","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256[]","name":"directteam","type":"uint256[]"},{"internalType":"uint256[]","name":"directreward","type":"uint256[]"},{"internalType":"uint256[]","name":"levelteam","type":"uint256[]"},{"internalType":"uint256[]","name":"levelreward","type":"uint256[]"}],"name":"updateMappingDataWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"updateRecordWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"address","name":"referral","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"updateUserWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"unclaim","type":"uint256"},{"internalType":"uint256","name":"commission","type":"uint256"},{"internalType":"uint256","name":"lastblock","type":"uint256"},{"internalType":"uint256","name":"cooldown","type":"uint256"},{"internalType":"address","name":"referral","type":"address"},{"internalType":"bool","name":"registerd","type":"bool"},{"internalType":"uint256","name":"teamsize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var v1router;

var PLG_DISTRIBUTOR = "0x4158970B4Ab6b366331334b15d77981D7347ADbf";
var PLG_DISTRIBUTOR_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"PullDataRequest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"polycashgold","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"polycashv1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalTokenDistribute","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatedid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_distributor;

var WMATIC_TOKEN = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
var WMATIC_TOKEN_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];
var matic_token;

var USDC_TOKEN = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
var USDC_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableTrading","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabledTrading","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"holding","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHolder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_flag","type":"bool"}],"name":"settingFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"},{"internalType":"uint256","name":"_swapTreshold","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"settingTokenomics","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var usdc_token;

var PLG_PAIR = "0x01242fCdCf162DDF1181d3Dc95471aBDC24fF4c5";
var MATIC_PAIR = "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827";

//

var PLG_FACTORY = "0xe8A274FE515014Fe29C9Bc27aA5b503a0B1707E3";
var PLG_FACTORY_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"getAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"updateFactoryAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
var plg_factory;

var PLG_USER;
var PLG_USER_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParticipants","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserReferralMap","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getUserUpline","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referree","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"name":"register","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"bool","name":"registerd","type":"bool"},{"internalType":"address[]","name":"refmap","type":"address[]"}],"name":"updateUserWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_user;

var ROUTERv2;
var ROUTERv2_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"breakperiod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"input","type":"uint256[]"}],"name":"changeDappVariables","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"referral","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"depositWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invest","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"repeat","type":"uint256"},{"internalType":"uint256","name":"block_deposit","type":"uint256"},{"internalType":"uint256","name":"block_withdraw","type":"uint256"},{"internalType":"uint256","name":"block_break","type":"uint256"},{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"uint256","name":"recycle","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockperiod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maximum_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"address","name":"oldRouter","type":"address"}],"name":"migrate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minimam_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"purgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unlockVIP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"updateWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vipBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vipperiod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var v2router;

var PLG_POOL;
var PLG_POOL_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"depositFor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"processETHRequest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"processTokenRequest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"purgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_pool;

var PLG_REFREWARD;
var PLG_REFREWARD_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"dataSlot","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"decreaseRecordData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"dataSlot","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"increaseRecordData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isCount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"members","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"recordData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"userContract","type":"address"},{"internalType":"string","name":"dataSlot","type":"string"}],"name":"rewardDistribute","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"dataSlot","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateRecordData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timer","type":"uint256"}],"name":"updateVIPBlockWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"viewMembersData","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vipBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_refreward;

var PLG_DEPOSIT;
var PLG_DEPOSIT_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PLGCostUnlocker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deleyed_default","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deleyed_maximumed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"name":"depositWithMATIC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountPreventBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maximum_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimam_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updatePLGCostUnlocker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_deposit;

var PLG_DEPOSIT_TOKEN;
var PLG_DEPOSIT_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PLGCostUnlocker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"slippage","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"buyPLG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"referral","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"slippage","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"depositWithPLG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"slippage","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"sellPLG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unlockLevelWithPLG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updatePLGCostUnlocker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_deposit_token;

var PLG_ALLSALE;
var PLG_ALLSALE_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakePLG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addMaticReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getMaximumedClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUnclaimReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedPLG","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"updateAppStateWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"updateUserWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_allsale;

var PLG_MIGRATE;
var PLG_MIGRATE_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"approveId","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDataFromId","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPendingId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSuccessId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"old_plg_refreward","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"old_plg_token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"purgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"rejectId","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestDATA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestOWNER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"requestStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requested_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"requestingMigrate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"requestingMigrateWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_migrate;

var PLG_WRAPPED;
var PLG_WRAPPED_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"str","type":"string"}],"name":"checkpermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"depositFor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"factoryAddressSetting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"grantRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purgeETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"purgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"revokeRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_wrapped;

var PLG_TOKEN;
var PLG_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableTrading","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabledTrading","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"holding","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHolder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_flag","type":"bool"}],"name":"settingFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"},{"internalType":"uint256","name":"_swapTreshold","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"settingTokenomics","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var plg_token;

var PLG_WTOKEN;
var plg_wtoken;

//

var swapToken0;
var swapToken1;

let maxuint256 = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;
let maxPriorityGas = 50 * 1000000000;
let deadaddr = "0x0000000000000000000000000000000000000000";

let appurl = "https://polycash.pro/index.html?ref=";
let copytext = "";
let fetch_url = "";

var login = false;
var handle_loader = false;
var handle_timer;

window.onload = function () {
    let isDarkMode = getCookie('darkMode');
    if(isDarkMode=='on'){
        document.getElementById('flexSwitch').checked = true;
        //
        const bglight = document.querySelectorAll('.bg-light');
        bglight.forEach(element => {
            element.classList.remove("bg-light");
            element.classList.add("bg-dark");
        });

        const bgwhite = document.querySelectorAll('.bg-white');
        bgwhite.forEach(element => {
            element.classList.remove("bg-white");
            element.classList.add("bg-black");
        });
            
        const textlight = document.querySelectorAll('.text-dark');
        textlight.forEach(element => {
            element.classList.remove("text-dark");
            element.classList.add("text-light");
        });

        const textwhite = document.querySelectorAll('.text-secondary');
        textwhite.forEach(element => {
            element.classList.remove("text-secondary");
            element.classList.add("text-white");
        });

        const card = document.querySelectorAll('.card');
        card.forEach(element => {
            element.classList.add("bg-dark");
            element.classList.add("border-light");
        });

        const hrsolid = document.querySelectorAll('.hr-solid');
        hrsolid.forEach(element => {
            element.classList.add("text-light");
        });

        const bggradient = document.querySelectorAll('.bg-gradient-polygon');
        bggradient.forEach(element => {
            element.classList.remove("bg-gradient-polygon");
            element.classList.add("bg-gradient-darkmode");
        });

        const wordgradient = document.querySelectorAll('.word-gradient');
        wordgradient.forEach(element => {
            element.classList.remove("word-gradient");
            element.classList.add("word-gradient-darkmode");
        });

        const btn = document.querySelectorAll('.btn-primary');
        btn.forEach(element => {
            element.classList.remove("btn-primary");
            element.classList.add("btn-dark");
        });
        //
    }

    document.getElementById('ele_btn_connectwallet').innerHTML = "Require MetaMask";
    if (typeof web3 != 'undefined') {
        document.getElementById('ele_btn_connectwallet').innerHTML = "Connect Wallet";
    }
    document.getElementById('ele_btn_connectwallet').addEventListener('click', () => {
        load();
    });

    //auto reconnect
    setInterval(function() {
        if(!login){
            load();
        }
    }, 6000);

    //handle tx not responding
    setInterval(function() {
        if(handle_loader){
            handle_timer = handle_timer - 1;
            if(handle_timer>7){}else{
                if(handle_timer>0){
                    document.getElementById('ele_span_loadtext').innerHTML = `Page will be reload in ${handle_timer}...`;
                }else{
                    location.reload();
                }
            }
        }
    }, 1000);

    const numberInput0 = document.getElementById('_swapInput0');
    numberInput0.addEventListener('input', handleInputChange0);

    const numberInput1 = document.getElementById('_swapInput1');
    numberInput1.addEventListener('input', handleInputChange1);

    load();
}

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.request({ method: 'eth_requestAccounts' });
    }
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    //return '0x617eC1C7bFBCb6e5c3e4F0fC9FD7Da792b508E4a';
    return accounts[0];
}

async function LoadContract(abi, address) {
    return await new window.web3.eth.Contract(abi, address);
}

async function load() {
    try{
        document.getElementById('ele_btn_connectwallet').innerHTML = `Loading Provider...`;
        await loadWeb3();
        const network = await web3.eth.net.getId();
        if (network != 137) {
            document.getElementById('ele_div_connectwallet').style.display = "none";
            document.getElementById('ele_div_switchchain').style.display = "inline-block";
        }
        document.getElementById('ele_btn_connectwallet').innerHTML = `Connecting...`;
        quick_router = await LoadContract(QUICK_ROUTER_ABI,QUICK_ROUTER);
        v1router = await LoadContract(ROUTERv1_ABI,ROUTERv1);
        plg_distributor = await LoadContract(PLG_DISTRIBUTOR_ABI,PLG_DISTRIBUTOR);
        matic_token = await LoadContract(WMATIC_TOKEN_ABI,WMATIC_TOKEN);
        usdc_token = await LoadContract(USDC_TOKEN_ABI,USDC_TOKEN);
        plg_factory = await LoadContract(PLG_FACTORY_ABI,PLG_FACTORY);
        const account = await getCurrentAccount();
        const balance = await web3.eth.getBalance(account);
        let resulta = account.substring(0, 6);
        let resultb = account.substring(38, 42);
        document.getElementById('ethbalance').innerHTML =`<h class="text-info">[ Wallet Balance : ${(balance/(10**18)).toFixed(2)} MATIC ]</h>`;
        document.getElementById('ele_btn_connectwallet').innerHTML =`${resulta}....${resultb}`;
        login = true;
        await initialization();
        await update();
    }catch(err){ console.log(err); }
}

async function forceChain137() {
    await loadingon("Requesting Switch Network...");
    const data = [{
        chainId: '0x89',
        chainName: 'Polygon LLAMA',
        nativeCurrency:
            {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
            },
        rpcUrls: ['https://polygon.llamarpc.com'],
        blockExplorerUrls: ['https://polygonscan.com/'],
    }]
    await window.ethereum.request({method: 'wallet_addEthereumChain', params:data}).catch()
    await loadingoff();
    location.reload();
}

async function initialization() {
    PLG_USER = await plg_factory.methods.getAddr("plg_user").call();
    ROUTERv2 = await plg_factory.methods.getAddr("plg_router").call();
    PLG_REFREWARD = await plg_factory.methods.getAddr("plg_refreward").call();
    PLG_DEPOSIT = await plg_factory.methods.getAddr("plg_depositETH").call();
    PLG_DEPOSIT_TOKEN = await plg_factory.methods.getAddr("plg_depositPLG").call();
    PLG_ALLSALE = await plg_factory.methods.getAddr("plg_allsale").call();
    PLG_MIGRATE = await plg_factory.methods.getAddr("plg_migrate").call();
    PLG_WRAPPED = await plg_factory.methods.getAddr("plg_wrapped").call();
    PLG_TOKEN = await plg_factory.methods.getAddr("plg_token").call();
    PLG_WTOKEN = await plg_factory.methods.getAddr("plg_wtoken").call();
    plg_user = await LoadContract(PLG_USER_ABI,PLG_USER);
    v2router = await LoadContract(ROUTERv2_ABI,ROUTERv2);
    plg_refreward = await LoadContract(PLG_REFREWARD_ABI,PLG_REFREWARD);
    plg_deposit = await LoadContract(PLG_DEPOSIT_ABI,PLG_DEPOSIT);
    plg_deposit_token = await LoadContract(PLG_DEPOSIT_TOKEN_ABI,PLG_DEPOSIT_TOKEN);
    plg_allsale = await LoadContract(PLG_ALLSALE_ABI,PLG_ALLSALE);
    plg_migrate = await LoadContract(PLG_MIGRATE_ABI,PLG_MIGRATE);
    plg_wrapped = await LoadContract(PLG_WRAPPED_ABI,PLG_WRAPPED);
    plg_token = await LoadContract(PLG_TOKEN_ABI,PLG_TOKEN);
    plg_wtoken = await LoadContract(PLG_TOKEN_ABI,PLG_WTOKEN);
    swapToken0 = WMATIC_TOKEN;
    swapToken1 = PLG_TOKEN;
}

async function update() {
    try{ await fetchurl(); console.log("fetchurl ok!"); }catch(err){ console.log(err); }
    try{ await render_account_v1(); console.log("render_account_v1 ok!"); }catch(err){ console.log(err); }
    try{ await render_plgtoken(); console.log("render_plgtoken ok!"); }catch(err){ console.log(err); }
    try{ await render_account_v2(); console.log("render_account_v2 ok!"); }catch(err){ console.log(err); }
    try{ await render_swap(); console.log("render_swap ok!"); }catch(err){ console.log(err); }
    try{ await render_dashboard(); console.log("render_dashboard ok!"); }catch(err){ console.log(err); }
    try{ await render_farm(); console.log("render_farm ok!"); }catch(err){ console.log(err); }
    try{ await render_countdown(); console.log("render_countdown ok!"); }catch(err){ console.log(err); }
    try{ await render_allsale(); console.log("render_allsale ok!"); }catch(err){ console.log(err); }
    try{ await render_affiliate(); console.log("render_affiliate ok!"); }catch(err){ console.log(err); }
}

async function SwitchDarkMode() {
    let isDarkMode = getCookie('darkMode');
    if(isDarkMode=='on'){
        setCookie('darkMode', 'off', 365);
    }else{
        setCookie('darkMode', 'on', 365);
    }
    location.reload();
}

async function fetchurl() {
    let url = new URL(window.location.href);
    let get = url.searchParams.get("ref");
    if(get!=null && get!=undefined){
        fetch_url = url.searchParams.get("ref");
    }else{
        fetch_url = deadaddr;
    }
    
    console.log([
        `default_addr : ${await getCurrentAccount()}`,
        `fetch_addr : ${fetch_url}`
    ]);
}

async function render_account_v1() {
    const account = await getCurrentAccount();
    const users = await v1router.methods.users(account).call();
    const records = await v1router.methods.records(account).call();
    const balance = await plg_distributor.methods.balances(account).call();
    let enabledTrading = await plg_token.methods.enabledTrading().call();
    const profit = (records.tWitdrawn/users.deposit)*100;
    //
    document.getElementById('_your_deposit').innerHTML = `<h class="text-info">${(users.deposit/(10**18)).toFixed(2)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('_your_tWithdraw').innerHTML = `<h class="text-info">${(records.tWitdrawn/(10**18)).toFixed(2)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('_your_%').innerHTML = `<h class="text-success">+${(profit).toFixed(2)}%</h>`;
    const gatedrop = 100;
    if(profit<gatedrop){
        document.getElementById('_your_drop').innerHTML = `<h class="word-gradient">${(balance/(10**18)).toFixed(2)} PLG</h>`;
        document.getElementById('_your_claim').innerHTML = `Claim ${(balance/(10**18)).toFixed(2)} PLG`;
    }else{
        document.getElementById('_your_drop').innerHTML = `<h class="word-gradient">${0} PLG</h>`;
        document.getElementById('_your_claim').innerHTML = `Claim ${0} PLG`;
    }
    if(balance>0 && enabledTrading){
        document.getElementById('_your_claim').classList.remove("disabled");
    }
}

async function render_account_v2() {
    const account = await getCurrentAccount();
    const referral = await plg_user.methods.getUserReferral(account).call();
    const vip = await plg_refreward.methods.vipBlock(account).call();
    let members = await plg_refreward.methods.viewMembersData(account).call();
    let direcpartner = await plg_user.methods.getUserReferralMap(account).call();
    const resulta = referral.substring(0, 6);
    const resultb = referral.substring(38, 42);
    const resultc = fetch_url.substring(0, 6);
    const resultd = fetch_url.substring(38, 42);
    if(referral==deadaddr){
        document.getElementById('_your_referral').innerHTML = `<h class="text-danger">Unverified</h>`
        if(fetch_url!=deadaddr){
            document.getElementById('_your_referral').innerHTML = `<h class="text-success">Register For : ${resultc}...${resultd}</h>`
        }
    }else{
        document.getElementById('_your_referral').innerHTML = `<a href="https://polygonscan.com/address/${referral}" target="_blank">${resulta}...${resultb}</a>`
    }
    document.getElementById('_your_directpartner').innerHTML = `<h class="text-info">${direcpartner.length}</h> user(s)`;
    document.getElementById('_your_members').innerHTML = `<h class="text-info">${members[1]}</h> user(s)`;
    if(referral!="0x0000000000000000000000000000000000000000"){
        document.getElementById(`ele_btn_reflink`).classList.remove("disabled");
        document.getElementById(`ele_btn_reflink`).classList.add("bg-gradient-polygon");
        document.getElementById(`ele_btn_reflink`).innerHTML = "Referral Link";
    }
    if(vip>maxuint256/2n){
        document.getElementById('_your_deeplevel').innerHTML = `<h class="text-danger">Unlimit Deep Level</h>`;
        document.getElementById('unlock_btn_1').classList.add("disabled");
    }else{
        document.getElementById('_your_deeplevel').innerHTML = `<h class="text-success">${direcpartner.length} Deep Level</h>`;
    }
}

async function render_plgtoken() {
    const matic_balance = await matic_token.methods.balanceOf(PLG_PAIR).call();
    const token_balance = await plg_token.methods.balanceOf(PLG_PAIR).call();
    const usdc_balance = await usdc_token.methods.balanceOf(MATIC_PAIR).call();
    const wmatic_balance = await matic_token.methods.balanceOf(MATIC_PAIR).call();
    const matic_price = matic_balance/token_balance;
    const plg_price = ((usdc_balance*(10**12))/wmatic_balance)*matic_price;
    document.getElementById('matic/plg').innerHTML = `<h class="text-warning">1 PLG</h> = <h class="text-info">${(matic_price).toFixed(6)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('plg_price').innerHTML = `${(plg_price).toFixed(6)}$ <h class="text-danger">( 4% Slippage )</h>`;
}

async function render_dashboard() {
    const account = await getCurrentAccount();
    const matic_balance = await plg_wtoken.methods.balanceOf(account).call();
    const migrate_status = await plg_migrate.methods.requestStatus(account).call();
    const path = [PLG_TOKEN,WMATIC_TOKEN];
    let askForAmount;
    let investData = await v2router.methods.invest(account).call();
    if(investData.balance<30000000000000000000n){ askForAmount = 30000000000000000000n; }else{ askForAmount = investData.balance; }
    let getAmountsIn = [0,0];
    try{ getAmountsIn = await quick_router.methods.getAmountsIn(askForAmount,path).call(); }catch{ getAmountsIn = [askForAmount,maxuint256]; }
    const allowance = await plg_token.methods.allowance(account,PLG_DEPOSIT_TOKEN).call();
    if (parseInt(allowance)>maxuint256/2n){
        document.getElementById('_plg_btn_approve').style.display = "none";
        document.getElementById('_plg_btn_deposit').style.display = "inline-block";
        document.getElementById('unlock_btn_0').classList.remove("disabled");
        document.getElementById('swap_btn_action').classList.remove("disabled");
    }
    let oldMigrateCA = await LoadContract(PLG_MIGRATE_ABI,"0x2dD07eDfd09B0e33613a53b64a16F98A3b1C5701");
    const old_migrate_status = await oldMigrateCA.methods.requestStatus(account).call();
    if(old_migrate_status>0){
        document.getElementById('_dashboard_migratestatus').innerHTML = `<h class="text-warning">Reject By Allowance!</h>`;
    }else{
        if(migrate_status==0){ document.getElementById('_dashboard_migratestatus').innerHTML = `<h class="text-light">Waiting User Migrate</h>`; }
    }
    if(migrate_status==1){ document.getElementById('_dashboard_migratestatus').innerHTML = `<h class="text-warning">Pending</h>`; }
    if(migrate_status==2){ document.getElementById('_dashboard_migratestatus').innerHTML = `<h class="text-success">Success!</h>`; }
    if(migrate_status==3){ document.getElementById('_dashboard_migratestatus').innerHTML = `<h class="text-danger">Danger Tx! Contact Dev!</h>`; }
    if(migrate_status==0){
        let plg_token_old = await LoadContract(PLG_TOKEN_ABI,"0x919A5712057173C7334cc60E7657791fF9ca6E8d");
        const allowance = await plg_token_old.methods.allowance(account,PLG_MIGRATE).call();
        if (parseInt(allowance)>maxuint256/2n){
            document.getElementById('_migrate_request').classList.remove("disabled");
        }else{
            document.getElementById('_migrate_approve').classList.remove("disabled");
        }
    }
    document.getElementById('_dashboard_deposit').innerHTML = `<h class="text-info">${(investData.balance/(10**18)).toFixed(2)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('_dashboard_wmatic').innerHTML = `<h class="text-info">${(matic_balance/(10**18)).toFixed(2)}</h> <h class="text-warning">WPLG</h>`;
    document.getElementById('_dashboard_repeat').innerHTML = `<h class="text-danger">${investData.repeat}x</h> multiple`;
    document.getElementById('_dashboard_cycle').innerHTML = `<h class="text-warning">${investData.cycle}</h> cycles`;
    document.getElementById('_dashboard_recycle').innerHTML = `<h class="text-success">${investData.recycle}</h> cycles`;
    try{
        document.getElementById('_plg_amountin').innerHTML = `Need <h class="word-gradient">${((getAmountsIn[0]/0.96)/(10**18)).toFixed(2)} - ${((getAmountsIn[0]/0.816)/(10**18)).toFixed(2)} PLG</h> For Deposit With PLG Value <h class="text-primary">${(getAmountsIn[1]/(10**18)).toFixed(2)} MATIC</h>`;
    }catch{
        document.getElementById('_plg_amountin').innerHTML = `Need <h class="word-gradient">Infinity PLG</h> For Deposit With PLG Value <h class="text-primary">${(investData.balance/(10**18)).toFixed(2)} MATIC</h>`;
    }
}

async function render_farm() {
    const account = await getCurrentAccount();
    const reward = await v2router.methods.getReward(account).call();
    let investData = await v2router.methods.invest(account).call();
    const stack = await plg_refreward.methods.recordData(account,"stack",investData.cycle).call();
    document.getElementById('_farming_reward').innerHTML = `<h class="text-info">${(reward/(10**18)).toFixed(6)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('_farming_cyclereward').innerHTML = `<h class="text-danger">${(stack/(10**18)).toFixed(2)}</h>  / <h class="text-info">${((investData.balance/(10**18))*investData.repeat).toFixed(2)}</h> <h class="text-primary">MATIC</h>`;
    document.getElementById('_farming_endedreward').innerHTML = `<h class="text-warning">${((investData.balance*0.225)/(10**18)).toFixed(2)} MATIC</h>`;
    document.getElementById('_farming_redeposit').innerHTML = `<h class="text-warning">${((investData.balance*1.5)/(10**18)).toFixed(2)} MATIC</h>`;
}

async function render_countdown() {
    const account = await getCurrentAccount();
    let investData = await v2router.methods.invest(account).call();
    const deleyed = await plg_deposit.methods.getAccountPreventBlock(account).call();
    const date_repeat = new Date(deleyed*1000);
    const date_withdraw = new Date(investData.block_withdraw*1000);
    const date_break = new Date(investData.block_break*1000);
    const date0 = date_repeat.toUTCString();
    const date1 = date_withdraw.toUTCString();
    const date2 = date_break.toUTCString();
    document.getElementById('_countdown_depositblock').innerHTML = `<h class="text-info">${investData.block_deposit}</h>`;
    document.getElementById('_countdown_redeposit').innerHTML = `<h class="text-success">${date0.substring(0,date1.indexOf("GMT")) + "UTC"}</h>`;
    document.getElementById('_countdown_cycleblock').innerHTML = `<h class="text-warning">${date1.substring(0,date1.indexOf("GMT")) + "UTC"}</h>`;
    document.getElementById('_countdown_breakblock').innerHTML = `<h class="text-danger">${date2.substring(0,date2.indexOf("GMT")) + "UTC"}</h>`;
}

async function render_allsale() {
    const account = await getCurrentAccount();
    let user = await plg_allsale.methods.user(account).call();
    const totalSupply = await plg_allsale.methods.totalStakedPLG().call();
    const totalRewardDeposit = await plg_allsale.methods.totalRewardDeposit().call();
    const pecentage = (user.balance/totalSupply)*100;
    try{
        const unclaim = await plg_allsale.methods.getUnclaimReward(account).call();
        document.getElementById('_stakedPLG_unclaim').innerHTML = `<h class="text-info">${(unclaim/(10**18)).toFixed(6)}</h> <h class="text-primary">MATIC</h>`;
    }catch{
        document.getElementById('_stakedPLG_unclaim').innerHTML = `<h class="text-info">${(0).toFixed(6)}</h> <h class="text-primary">MATIC</h>`;
    }
    document.getElementById('_stakedPLG_totalLock').innerHTML = `<h class="text-warning">${(totalSupply/(10**18)).toFixed(2)} PLG</h>`;
    document.getElementById('_stakedPLG_totalpaid').innerHTML = `<h class="text-info">${(totalRewardDeposit/(10**18)).toFixed(2)} <h class="text-primary">MATIC</h></h>`;
    document.getElementById('_stakedPLG_accountLock').innerHTML = `<h class="text-warning">${(user.balance/(10**18)).toFixed(2)} PLG</h> <h class="text-success">( Pooled Shared ${(pecentage).toFixed(2)}% )</h>`;
    document.getElementById('_stakedPLG_claimed').innerHTML = `<h class="text-danger">${(user.claimed/(10**18)).toFixed(4)}</h> / <h class="text-info">${((user.balance*2.5)/(10**18)).toFixed(2)}</h> <h class="text-primary">MATIC</h>`;
    const allowance = await plg_token.methods.allowance(account,PLG_ALLSALE).call();
    if (parseInt(allowance)>maxuint256/2n){
        document.getElementById('stakePLG_BTN_0').style.display = "none";
        document.getElementById('stakePLG_BTN_1').style.display = "inline-block";
        document.getElementById('stakePLG_BTN_2').classList.remove("disabled");
    }
}

async function render_affiliate() {
    const account = await getCurrentAccount();
    let i = 0;
    do{
        const members = await plg_refreward.methods.members(account,parseInt(i)+parseInt(1)).call();
        const record_ref = await plg_refreward.methods.recordData(account,"ref",i).call();
        const record_matching = await plg_refreward.methods.recordData(account,"matching",i).call();
        i++;
        document.getElementById(`_your_level_${i}`).innerHTML = `
        <h class="text-muted">LV ${i} :</h> <h class="text-warning">${members}</h> user(s)
        Total Commission <h class="text-info">${((parseInt(record_ref)+parseInt(record_matching))/(10**18)).toFixed(2)}</h> <h class="text-primary">MATIC</h>
        `
    }while(i<30);
}

async function addToken() {
    try {
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: PLG_TOKEN,
                    symbol: '$PLG',
                    decimals: 18,
                },
            },
        });
    } catch (error) { console.log(error); }
}

async function increaseDepositAmount(amount) {
    let currentvalue = parseInt(document.getElementById('_input_deposit').value);
    if(currentvalue>0){
        document.getElementById('_input_deposit').value = parseInt(currentvalue) + parseInt(amount);
    }else{
        document.getElementById('_input_deposit').value = amount;
    }
    if(document.getElementById('_input_deposit').value<30){ document.getElementById('_input_deposit').value = 30; }
    if(document.getElementById('_input_deposit').value>1000){ document.getElementById('_input_deposit').value = 1000; }
}

async function approvePLG() {
    const account = await getCurrentAccount();
    const tx = await plg_token.methods.approve(PLG_DEPOSIT_TOKEN,maxuint256).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function approveStakedPLG() {
    const account = await getCurrentAccount();
    const tx = await plg_token.methods.approve(PLG_ALLSALE,maxuint256).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function approveMigrate() {
    const account = await getCurrentAccount();
    let plg_token_old = await LoadContract(PLG_TOKEN_ABI,"0x919A5712057173C7334cc60E7657791fF9ca6E8d");
    const tx = await plg_token_old.methods.approve(PLG_MIGRATE,maxuint256).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function requestMigrate() {
    loadingon("Requesting Migration Contract...");
    const account = await getCurrentAccount();
    let plg_token_old = await LoadContract(PLG_TOKEN_ABI,"0x919A5712057173C7334cc60E7657791fF9ca6E8d");
    const plg_amount = await plg_token_old.methods.balanceOf(account).call();
    let plg_refreward_old = await LoadContract(PLG_REFREWARD_ABI,"0x5EEddE12d4F65af99a29c27Dcbb9389732ddAC4a");
    const vipBlock = await plg_refreward_old.methods.vipBlock(account).call();
    let plg_allsale_old = await LoadContract(PLG_ALLSALE_ABI,"0xe955D83298b714e06250b06F51917aA605385fA7");
    let user = await plg_allsale_old.methods.user(account).call();
    let data = [plg_amount,vipBlock,user[0],user[1]];
    const tx = await plg_migrate.methods.requestingMigrate(data).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function claimToken() {
    loadingon("Claiming Token Request...");
    const account = await getCurrentAccount();
    const tx = await plg_distributor.methods.claimToken().send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function claimStakedPLG() {
    loadingon("Claiming All Sale Request...");
    const account = await getCurrentAccount();
    const tx = await plg_allsale.methods.claimReward().send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function depositMATIC() {
    const account = await getCurrentAccount();
    const inputvalue = parseInt(document.getElementById('_input_deposit').value);
    let msgvalue = 0;
    msgvalue = inputvalue * (10**18);
    if(msgvalue<30000000000000000000n || msgvalue>1000000000000000000000n){
        document.getElementById('_input_deposit').value = "";
        return;
    }
    loadingon("Deposit With MATIC...");
    const tx = await plg_deposit.methods.depositWithMATIC(account,fetch_url).send({ value: `${BigInt(msgvalue)}`, from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function depositPLG() {
    const account = await getCurrentAccount();
    let askForAmount = 0;
    let investData = await v2router.methods.invest(account).call();
    if(investData.balance<30000000000000000000n){ askForAmount = 30000000000000000000n; }else{ askForAmount = investData.balance; }
    loadingon("Deposit With PLG...");
    const tx = await plg_deposit_token.methods.depositWithPLG(account,fetch_url,askForAmount,1000,960).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function stakePLG() {
    const account = await getCurrentAccount();
    const inputvalue = parseInt(document.getElementById('_input_stake_PLG').value);
    loadingon("Staking With PLG...");
    const tx = await plg_allsale.methods.StakePLG(BigInt(inputvalue*(10**18))).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function claimWMATIC() {
    const account = await getCurrentAccount();
    const matic_balance = await plg_wtoken.methods.balanceOf(account).call();
    loadingon("Withdraw WMATIC...");
    const tx = await plg_wrapped.methods.withdraw(matic_balance).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function unlocklvwithplg() {
    const account = await getCurrentAccount();
    loadingon("Unlock Level With PLG...");
    const tx = await plg_deposit_token.methods.unlockLevelWithPLG(account).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
    location.reload();
}

async function swapSwitch() {
    const temp0 = swapToken0;
    const temp1 = swapToken1;
    swapToken0 = temp1;
    swapToken1 = temp0;
    await render_swap();
}

async function render_swap() {
    let tokenA = await LoadContract(PLG_TOKEN_ABI,swapToken0);
    let tokenB = await LoadContract(PLG_TOKEN_ABI,swapToken1);
    const nameA = await tokenA.methods.symbol().call();
    const nameB = await tokenB.methods.symbol().call();
    document.getElementById('_swapInput0').value = null;
    document.getElementById('_swapInput1').value = null;
    document.getElementById('_tokenSwap0_name').innerHTML = nameA;
    document.getElementById('_tokenSwap1_name').innerHTML = nameB;
    if(nameA=="WMATIC"){
        document.getElementById('_tokenSwap0_icon').src = "images/matic.png";
        document.getElementById('_tokenSwap1_icon').src = "images/plg.png";
    }
    if(nameA=="$PLG"){
        document.getElementById('_tokenSwap0_icon').src = "images/plg.png";
        document.getElementById('_tokenSwap1_icon').src = "images/matic.png";
    }
}

async function swapToken() {
    if(swapToken0==WMATIC_TOKEN){
        const account = await getCurrentAccount();
        const inputAmount = document.getElementById('_swapInput0').value;
        if(inputAmount>0){}else{ return; }
        loadingon("Swap Exact MATIC For PLG...");
        const tx = await plg_deposit_token.methods.buyPLG(account,960,1000).send({ value: inputAmount*(10**18), from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
        location.reload();
    }else{
        const account = await getCurrentAccount();
        const inputAmount = document.getElementById('_swapInput0').value;
        if(inputAmount>0){}else{ return; }
        loadingon("Swap Exact PLG For MATIC...");
        const tx = await plg_deposit_token.methods.sellPLG(account,BigInt(inputAmount*(10**18)),1000,960).send({ from: account, maxPriorityFeePerGas: maxPriorityGas }).catch(function (error) { location.reload(); });
        location.reload();
    }
}

async function handleInputChange0(e) {
    await updateRateSwap0(this.value);
}

async function handleInputChange1(e) {
    await updateRateSwap1(this.value);
}

async function updateRateSwap0(value) {
    if(value<=0){ 
        document.getElementById('_swapInput1').value = '0';
        return;
    }
    document.getElementById('_swapInput1').value = '...';
    const path = [swapToken0,swapToken1];
    let getAmountsOut = await quick_router.methods.getAmountsOut(BigInt(value*(10**18)),path).call();
    console.log(getAmountsOut);
    const amountOut = getAmountsOut[1]*960/1000;
    document.getElementById('_swapInput1').value = (amountOut/(10**18)).toFixed(2);
}

async function updateRateSwap1(value) {
    if(value<=0){ 
        document.getElementById('_swapInput0').value = '0';
        return;
    }
    document.getElementById('_swapInput0').value = '...';
    const path = [swapToken0,swapToken1];
    let getAmountsOut = await quick_router.methods.getAmountsIn(BigInt(value*(10**18)),path).call();
    console.log(getAmountsOut);
    const amountOut = getAmountsOut[0]*1000/960;
    document.getElementById('_swapInput0').value = (amountOut/(10**18)).toFixed(2);
}

async function loadingon(text) {
    document.getElementById('ele_div_loadtext').style.display = "inline";
    document.getElementById('ele_span_loadtext').innerHTML = `${text}`;
    handle_timer = 60;
    handle_loader = true;
}

async function loadingoff() {
    document.getElementById('ele_div_loadtext').style.display = "none";
    handle_loader = false;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function copyLink() {
    const account = await getCurrentAccount();
    document.getElementById('ele_hidden_reflink').innerHTML = appurl + account;
    copytext = document.getElementById('ele_hidden_reflink').innerHTML;
    copyToClipboard(copytext);
    alert("Copied Link!");
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}