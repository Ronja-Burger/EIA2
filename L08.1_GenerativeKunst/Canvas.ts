namespace Canvas {
  window.addEventListener("load", start);

  let crc2: CanvasRenderingContext2D;

  function start(_event: Event): void {
    crc2 = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");
    triangle();
    text();
    circle();
    square();
  }

  function triangle(): void {
    crc2.beginPath();
    crc2.strokeStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," +  randomNumberRGB() + ")";
    crc2.moveTo(randomNumber(), 20);
    crc2.lineTo(randomNumber() + 40, 50);
    crc2.lineTo(randomNumber() - 10, 50);
    crc2.closePath();
    crc2.stroke();
  }

  function text(): void {
    crc2.beginPath();
    crc2.font = "30px Arial";
    crc2.fillText("Hello World", randomNumber(), randomNumber());
  }

  function circle(): void {
    crc2.beginPath();
    crc2.strokeStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," +  randomNumberRGB() + ")";
    let path: Path2D = new Path2D();
    path.arc(randomNumber(), randomNumber(), randomNumber(), 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke(path);
  }

  function square(): void {
    crc2.beginPath();
    crc2.fillStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," +  randomNumberRGB() + ")";
    crc2.fillRect(randomNumber(), randomNumber(), randomNumber(), randomNumber());
    crc2.closePath();
    crc2.stroke();
  }

  function randomNumber(): number {
    let number: number = Math.floor(Math.random() * 50);
    return number;
  }

  function randomNumberRGB(): number {
    let rgbNumber: number = Math.floor(Math.random() * 256);
    return rgbNumber;
  }
}