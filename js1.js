function searchfor() {
    const searchValue = document.getElementById('searchForm').value;
    // const submitValue = searchValue + "+site:shuobo.info";
    const a=document.createElement('a')
    const href="https://www.baidu.com/s?word="+searchValue
    a.setAttribute('href', href)
    a.setAttribute('target','_blank')
    a.setAttribute('id','theSearch')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(document.getElementById("theSearch"))
}
