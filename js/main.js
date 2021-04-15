let totalCoins = 0;
let availableCoins = 0;
let smallUpgradeCount = 0;
let smallUpgradePrice = 10;
let bigUpgradeCount = 0;
let bigUpgradePrice = 90;


setInterval(function () {
    if (availableCoins < smallUpgradePrice) {
        $('#small-upgrade-btn').prop('disabled', true);
    } else {
        $('#small-upgrade-btn').prop('disabled', false);
    }
    totalCoins += smallUpgradeCount / 100;
    availableCoins += smallUpgradeCount / 100;

    if (availableCoins < bigUpgradePrice) {
        $('#big-upgrade-btn').prop('disabled', true);
    } else {
        $('#big-upgrade-btn').prop('disabled', false);
    }
    totalCoins += bigUpgradeCount / 10;
    availableCoins += bigUpgradeCount / 10;


    $('#total-coin-count').html(totalCoins.toFixed(0));
    $('#available-coin-count').html(availableCoins.toFixed(0));
    $('#small-upgrade-count').html(smallUpgradeCount);
    $('#big-upgrade-count').html(bigUpgradeCount);
    $('#small-upgrade-price').html(smallUpgradePrice.toFixed(0));
    $('#big-upgrade-price').html(bigUpgradePrice.toFixed(0));
}, 10);


$('#click-me-btn').click(function () {
    totalCoins++;
    availableCoins++;
});

$('#small-upgrade-btn').click(function () {
    smallUpgradeCount++;
    availableCoins -= smallUpgradePrice;
    smallUpgradePrice = smallUpgradePrice + (smallUpgradePrice * 0.1);

});

$('#big-upgrade-btn').click(function () {
    bigUpgradeCount++;
    availableCoins -= bigUpgradePrice;
    bigUpgradePrice = bigUpgradePrice + (bigUpgradePrice * 0.1);
});