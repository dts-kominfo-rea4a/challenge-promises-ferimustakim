const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;

const promiseOutput = async (emosi) => {
    let Theater_IXX = await promiseTheaterIXX();
    let Theater_VGC = await promiseTheaterVGC();
    
    return new Promise((resolve, reject)=>{
      if(Theater_IXX !== undefined || Theater_VGC !== undefined){
        let hitungIXX = Theater_IXX.filter((item)=>item.hasil == emosi).length;
        let hitungVGC = Theater_VGC.filter((item)=>item.hasil == emosi).length;
        
        resolve(hitungIXX + hitungVGC);
      }else{
        reject("err");
      }
    })
};
    
    


module.exports = {
  promiseOutput,
};
