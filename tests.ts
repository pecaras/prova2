let fi = 0;
let file = "";
input.onButtonPressed(Button.B, () => {
    file = "data" + (fi++) + ".csv";
    serial.writeLine(file);
    filesa.remove(file)
    filesa.readToSerial(file);
    serial.writeLine("");
    basic.showString("o")
    for (let i = 0; i < 200; ++i) {
        let t = input.runningTime();
        let ay = input.acceleration(Dimension.Y);
        filesa.appendNumber(file, i);
        filesa.appendString(file, " ");
        filesa.appendNumber(file, i * i);
        filesa.appendLine(file, "");
        serial.writeLine(".")
        basic.pause(10)
    }
    serial.writeLine("");
    filesa.readToSerial(file);
    basic.showString(":)")
})
let test = Math.random(1000);
filesa.settingsSaveNumber("test", test);
serial.writeValue("test", test);
let serTest = filesa.settingsReadNumber("test");
serial.writeValue("serTest", serTest);
control.assert(test == serTest);

let f = filesa.open("output.txt");
f.writeString("writeString\r\n");
f.seek(0, FileSystemSeekFlags.End);
f.flush();
f.close();

input.onButtonPressed(Button.A, () => {
    filesa.appendLine(
        "output.txt",
        "hello"
    )
})
input.onButtonPressed(Button.B, () => {
    basic.showString("H")
    filesa.readToSerial("output.txt")
    serial.writeString("Hi")
})

const fn = "out2.txt";
input.onButtonPressed(Button.A, () => {
    basic.showString("o")
    filesa.appendLine(fn, "hello");
    serial.writeString("[")
    filesa.readToSerial(fn)
})
const fo = "output.txt";
input.onButtonPressed(Button.A, () => {
    filesa.appendLine(fo, "hello")
    serial.writeString("W")
    basic.showString("W")
})
input.onButtonPressed(Button.B, () => {
    filesa.readToSerial(fo)
    serial.writeString("Hi")
    basic.showString("H")
})
