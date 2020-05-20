// 过滤json 中的字段


// @data {}
// @arts ['过滤字段']
const filterJson = (data, arts) => {
    let res = {};
    for(let i in data){
        if(!arts.some(v => (v === i))){
            res[i] = data[i];
        }
    }

    return res;
}

module.exports = filterJson;