const fs = require('fs');
const path = require('path');
let target = path.join(__dirname,'./');//获取目标文件的目录内容
function loadTree(target, deep){
  let prev=new Array(deep).join('┃');
  let dirInfo=fs.readdirSync(target);
  let files=[];
  let dirs=[];

  //将文件与文件夹分开存储
  for(let i=0;i<dirInfo.length;i++){
    let stat=fs.statSync(path.join(target,dirInfo[i]));
    if(stat.isFile()){
        files.push(dirInfo[i]);
    }else{
        dirs.push(dirInfo[i]);
    }
  }
  //文件夹操作
  for(let i=0;i<dirs.length;i++){
    console.log(`┣${dirs[i]}`);
    let nextPath=path.join(target,dirs[i]);
    let nextDeep=deep+1;
    loadTree(nextPath,nextDeep);//递归调用
    }
  //文件操作
  for(i=files.length-1;i>=0;i--){
    if(i===0){
      console.log(`${prev}┗${files[i]}`);
    }else{
      console.log(`┣${files[i]}`);
    }
  }
}

loadTree(target,1);
