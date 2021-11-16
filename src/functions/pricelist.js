const fs = require('fs');
const path = require('path');
const dinoPrices = path.resolve(__dirname, "../json/price-list.json");

async function getDinoPrices  () {
    try {
        var dinoPriceList = JSON.parse(fs.readFileSync(dinoPrices));
        return dinoPriceList;
    } catch ( err ) {
        console.log(err);
        return null;
    }
}

const getDinoPrice = async dinoName => {
    try {
        var dinoPriceList = JSON.parse(fs.readFileSync(dinoPrices));
        for(var x = 0; x < dinoPriceList.length; x++) {
            if(dinoName.toLowerCase() == dinoPriceList[x].ShortName.toLowerCase()) {
                return [dinoPriceList[x].ShortName, dinoPriceList[x].Price];
            }
        }
    }
    catch ( err ) {
        console.error(err);
        return [dinoName, null];
    }

}

module.exports = { getDinoPrices, getDinoPrice};