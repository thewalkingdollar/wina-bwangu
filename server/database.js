const boothConfig = {
    Wina1: { location: 'Lusaka CPD', services: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'] },
    Wina2: { location: 'Libala', services: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'FNB'] },
    Wina3: { location: 'Kabwata', services: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'] },
    Wina4: { location: 'Mandevu', services: ['Airtel Money', 'MTN Money', 'Zamtel Money'] },
    Wina5: { location: 'Woodlands', services: ['Airtel Money', 'MTN Money', 'Zanaco', 'FNB'] },
    Wina6: { location: 'Matero East', services: ['Airtel Money', 'MTN Money', 'Zamtel Money'] }
};
const rates = {'Airtel Money':0.05,'MTN Money':0.06,'Zamtel Money':0.045,'Zanaco':0.035,'FNB':0.04};
const limits = {'Airtel Money':350000,'MTN Money':160000,'Zamtel Money':70000,'Zanaco':80000,'FNB':80000};
let transactions = [
    {id:"WB0000001",booth:"Wina1",location:"Lusaka CPD",service:"Airtel Money",amount:964,afterTax:964,revenue:48.2,date:"2024-01-15"},
    {id:"WB0000002",booth:"Wina1",location:"Lusaka CPD",service:"MTN Money",amount:220,afterTax:220,revenue:13.2,date:"2024-01-15"},
];
let counter = transactions.length+1;
function getDashboard(){
    let totalRevenue=0,totalCapital=0; const byService={},byBooth={},freqService={},freqBooth={},used={};
    transactions.forEach(t=>{totalRevenue+=t.revenue;totalCapital+=t.amount;byService[t.service]=(byService[t.service]||0)+t.revenue;byBooth[t.booth]=(byBooth[t.booth]||0)+t.revenue;freqService[t.service]=(freqService[t.service]||0)+1;freqBooth[t.booth]=(freqBooth[t.booth]||0)+1;used[t.service]=(used[t.service]||0)+t.amount;});
    const remaining={}; Object.keys(limits).forEach(s=>remaining[s]=limits[s]-(used[s]||0));
    return {totalRevenue,totalCapital,byService,byBooth,freqService,freqBooth,remaining,used,count:transactions.length,limits};
}
function createTx(booth,service,amount){const tx={id:'WB'+String(counter).padStart(7,'0'),booth,location:boothConfig[booth].location,service,amount:parseFloat(amount),afterTax:parseFloat(amount),revenue:parseFloat(amount)*rates[service],date:new Date().toISOString().split('T')[0]};transactions.push(tx);counter++;return tx;}
module.exports={boothConfig,rates,limits,transactions,getDashboard,createTx, getAll:()=>transactions};
