const { execSync } = require("child_process");
const { table } = require("table");
const { program } = require("commander");

// Define the version of the CLI tool
const version = "1.0.0"; // Update this version as needed

// Function to execute command and return true if installed, false if not
function isInstalled(command) {
  try {
    execSync(command, { stdio: "ignore" });
    return "Yes";
  } catch (e) {
    return "No";
  }
}

// Define the languages, compilers, and package managers
const languagesAndTools = [
  { language: "C", compiler: "GCC (Compiler)", compilerCommand: "gcc --version", pm: "pkg-config", pmCommand: "pkg-config --version" },
  { language: "C++", compiler: "G++ (Compiler)", compilerCommand: "g++ --version", pm: "pkg-config", pmCommand: "pkg-config --version" },
  { language: "JavaScript", compiler: "Node.js (Interpreter)", compilerCommand: "node -v", pm: "npm", pmCommand: "npm -v" },
  { language: "Python", compiler: "Python (Interpreter)", compilerCommand: "python3 --version", pm: "pip", pmCommand: "pip --version" },
  { language: "Ruby", compiler: "Ruby", compilerCommand: "ruby --version", pm: "gem", pmCommand: "gem -v" },
  { language: "Java", compiler: "jdk", compilerCommand: "java -version", pm: "Maven", pmCommand: "mvn -v" },
  { language: "Java", compiler: "javac", compilerCommand: "javac -version", pm: "Gradle", pmCommand: "gradle -v" },
  { language: "Rust", compiler: "Rust Compiler (rustc)", compilerCommand: "rustc --version", pm: "Cargo", pmCommand: "cargo --version" },
  { language: "PHP", compiler: "PHP", compilerCommand: "php --version", pm: "composer", pmCommand: "composer --version" },
  { language: "Go", compiler: "Go Compiler", compilerCommand: "go version", pm: "go", pmCommand: "go version" },
  { language: "Perl", compiler: "Perl", compilerCommand: "perl -v", pm: "cpan", pmCommand: "cpan -v" },
  { language: "Swift", compiler: "Swift Compiler", compilerCommand: "swift --version", pm: "Swift Package Manager", pmCommand: "swift package --help" },
  { language: "Haskell", compiler: "GHC", compilerCommand: "ghc --version", pm: "cabal", pmCommand: "cabal --version" },
  { language: "Haskell", compiler: "GHC", compilerCommand: "ghc --version", pm: "stack", pmCommand: "stack --version" },
  { language: "R", compiler: "R", compilerCommand: "R --version", pm: "pak", pmCommand: "R -e \"install.packages('pak')\"" },
  { language: "Lua", compiler: "Lua", compilerCommand: "lua -v", pm: "luarocks", pmCommand: "luarocks --version" },
  { language: "Elixir", compiler: "Elixir", compilerCommand: "elixir --version", pm: "mix", pmCommand: "mix --version" },
  { language: "Scala", compiler: "Scala Compiler", compilerCommand: "scala -version", pm: "sbt", pmCommand: "sbt -version" },
  { language: "Kotlin", compiler: "Kotlin Compiler", compilerCommand: "kotlinc -version", pm: "Gradle", pmCommand: "gradle -v" },
  { language: "Kotlin", compiler: "Kotlin Compiler", compilerCommand: "kotlinc -version", pm: "Maven", pmCommand: "mvn -v" },
  { language: "TypeScript", compiler: "TypeScript Compiler (tsc)", compilerCommand: "tsc --version", pm: "npm", pmCommand: "npm -v" },
  { language: "TypeScript", compiler: "TypeScript Compiler (tsc)", compilerCommand: "tsc --version", pm: "yarn", pmCommand: "yarn -v" },
  { language: "OCaml", compiler: "OCaml Compiler", compilerCommand: "ocaml -version", pm: "opam", pmCommand: "opam --version" },
  { language: "F#", compiler: "F# Compiler", compilerCommand: "fsharpc --version", pm: "nuget", pmCommand: "nuget --version" },
  { language: "Julia", compiler: "Julia", compilerCommand: "julia --version", pm: "Pkg", pmCommand: 'julia -e "using Pkg; Pkg.status()"' },
  { language: "Dart", compiler: "Dart SDK", compilerCommand: "dart --version", pm: "pub", pmCommand: "dart pub --version" },
  { language: "Clojure", compiler: "Clojure", compilerCommand: "clj --version", pm: "leiningen", pmCommand: "lein version" },
  { language: "Objective-C", compiler: "Clang", compilerCommand: "clang --version", pm: "CocoaPods", pmCommand: "pod --version" },
  { language: "Racket", compiler: "Racket", compilerCommand: "racket --version", pm: "raco", pmCommand: "raco --version" },
];

// Function to execute the command for checking if installed
function isInstalled(command) {
  try {
    execSync(command, { stdio: "ignore" });
    return "Yes";
  } catch (e) {
    return "No";
  }
}

// Function to generate the table data
function generateTableData() {
  return languagesAndTools.map(
    ({ language, compiler, compilerCommand, pm, pmCommand }) => {
      const isCompilerInstalled = isInstalled(compilerCommand);
      const isPmInstalled = isInstalled(pmCommand);
      return [language, compiler, isCompilerInstalled, pm, isPmInstalled];
    }
  );
}

// Function to display the table
function displayTable() {
  const tableData = generateTableData();
  const headers = [
    "Programming Language",
    "Compiler / Interpreter",
    "Installed (Compiler)",
    "Package Manager / Tools",
    "Installed (Package Manager)",
  ];

  // Combine headers and table data
  const tableContent = [headers, ...tableData];

  // Generate and print the table
  console.log(table(tableContent));

  // Footer info
  console.log(
    "                                            Developed by Mohammad Mahfuz Rahman                        "
  );
  console.log(
    "                                            GitHub: https://github.com/mahfuz0712                      "
  );
}

// Set up the CLI tool using commander
program
  .version(version) // Set the version of the CLI
  .description("CLI tool to check the status of programming languages, compilers, and package managers")
  .action(() => {
    displayTable();
  });

// If --version flag is passed, show version
program.parse(process.argv);

