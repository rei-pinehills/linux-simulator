const input = document.getElementById("command-input");
const output = document.getElementById("output");

const commands = {
    help: "Available commands: ls, pwd, whoami, date, echo, clear,help",
    ls: "Desktop Documents Downloads Pictures",
    pwd: "/home/rei",
    whoami: "rei",
    date: new Date().toString(),
};

function printLine(text, isError = false) {
    const div = document.createElement("div");
    div.classList.add("output-line");
    if (isError) div.classList.add("error");
    div.textContent = text;
    output.appendChild(div);
}
input.addEventListener("keydown", function(e) {
    if (e.key ==="Enter") {
        const cmd = input.value.trim();
        printLine("$ " + cmd);

        if (cmd === "clear") {
            output.innerHTML = "";
        } else if (cmd === ""){
            // do nothing
        } else if (cmd.startsWith("echo ")){
            printLine(cmd.slice(5));
        } else if (commands[cmd]){
            printLine(commands[cmd]);
        }else {
            printLine("command not found: " + cmd, true);
        }
        input.value = "";
        output.scrollTop = output.scrollHeight;
    }

});