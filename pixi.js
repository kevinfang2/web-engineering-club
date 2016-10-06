<!doctype html>
<meta charset="utf-8">
<title>test</title>
<body>
<script src="pixi.min.js"></script>
<script>

//Test that Pixi is working
console.log(PIXI);

var pixi = new PIXI.Graphics();

pixi.beginFill(0xFFFF00);

pixi.lineStyle(5, 0xFF0000);

pixi.drawRect(0, 0, 300, 200);

addChild(pixi);

</script>
</body>