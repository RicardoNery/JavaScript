/// sai do laco com break
const nums = [1, 2, 3, 4, 5, 6, 7, 8,];
for (i in nums){
    if(i == 5){
        break;
    }
    console.log(`${i} = ${nums[i]}`);
}


for (i in nums){
    if(i == 5){
        continue;
    }
    console.log(`${i} = ${nums[i]}`);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}