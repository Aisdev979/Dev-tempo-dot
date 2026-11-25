# Engineered by Omonire (github.com/omonire)
# Challenge 007 - JavaScript Fetch API (ProvChart)

# This small build script compiles style.fscss into style.css.
# We edit the .fscss file by hand, then run this script to create normal CSS.
# The browser reads style.css, so no FSCSS knowledge is needed to view the page.
#
# Install the Python wrapper once with: python -m pip install fscss==0.1.0
# Node.js must also be installed because the wrapper uses the vendored FSCSS compiler.

# Path is part of Python's standard library. It helps us build safe file paths.
from pathlib import Path

# fscss is the Python wrapper that runs the FSCSS compiler for us.
import fscss

# Use the folder of this file as the base path.
# That way the script still works when run from another directory.
HERE = Path(__file__).resolve().parent

# SOURCE is the readable FSCSS file that we change when designing the page.
SOURCE = HERE / "style.fscss"

# OUTPUT is generated CSS. We should not edit this file by hand.
OUTPUT = HERE / "style.css"


def main():
    # compile_file() reads the FSCSS source and writes normal CSS to the output.
    # Behind the scenes, the Python wrapper calls the vendored Node compiler.
    result = fscss.compile_file(SOURCE, OUTPUT)

    # The compiler returns messages such as the source and output paths.
    # Printing them makes it clear that the build ran and where it wrote the CSS.
    print(result)


# This check means "only run main() when this file is run directly".
# It lets another Python file import this script without starting a build.
if __name__ == "__main__":
    main()
