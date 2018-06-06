let fi = 0;
let file = "";
input.onButtonPressed(Button.B, () => {
    file = "data" + (fi++) + ".csv";
    serial.writeLine(file);
    filesA.remove(file)
    filesA.readToSerial(file);
    serial.writeLine("");
    basic.showString("o")
    for (let i = 0; i < 200; ++i) {
        let t = input.runningTime();
        let ay = input.acceleration(Dimension.Y);
        filesA.appendNumber(file, i);
        filesA.appendString(file, " ");
        filesA.appendNumber(file, i * i);
        filesA.appendLine(file, "");
        serial.writeLine(".")
        basic.pause(10)
    }
    serial.writeLine("");
    filesA.readToSerial(file);
    basic.showString(":)")
})
let test = Math.random(1000);
filesA.settingsSaveNumber("test", test);
serial.writeValue("test", test);
let serTest = filesA.settingsReadNumber("test");
serial.writeValue("serTest", serTest);
control.assert(test == serTest);

let f = filesA.open("output.txt");
f.writeString("writeString\r\n");
f.seek(0, FileSystemSeekFlags.End);
f.flush();
f.close();

input.onButtonPressed(Button.A, () => {
    filesA.appendLine(
        "output.txt",
        "hello"
    )
})
input.onButtonPressed(Button.B, () => {
    basic.showString("H")
    filesA.readToSerial("output.txt")
    serial.writeString("Hi")
})

const fn = "out2.txt";
input.onButtonPressed(Button.A, () => {
    basic.showString("o")
    filesA.appendLine(fn, "hello");
    serial.writeString("[")
    filesA.readToSerial(fn)
})
const fo = "output.txt";
input.onButtonPressed(Button.A, () => {
    filesA.appendLine(fo, "hello")
    serial.writeString("W")
    basic.showString("W")
})
input.onButtonPressed(Button.B, () => {
    filesA.readToSerial(fo)
    serial.writeString("Hi")
    basic.showString("H")
})
