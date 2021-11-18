<script>
    let src = [
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif', 
		'https://c.tenor.com/mKTS5nbF1zcAAAAM/cute-anime-dancing.gif',
        'https://c.tenor.com/rnhV3fu39f8AAAAM/eating-anime.gif'
	];
    let i = 0;
    setInterval(() => { i = Math.floor(Math.random()*3)}, 20000);
</script>

<img src={src[i]} alt="i think it works now" >

<!-- width="300" height="300" -->