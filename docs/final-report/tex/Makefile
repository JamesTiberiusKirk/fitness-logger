PAPER=./final-report.tex  # set the path to your TeX file here
SHELL=/bin/zsh   # for the while loop below

all:  ## Compile paper
	pdflatex -interaction=nonstopmode $(PAPER)

clean:  ## Clean output files
	rm $(PAPER)

watch:  ## Recompile on updates to the source file
	@while [ 1 ]; do; inotifywait $(PAPER); sleep 0.01; make all; done
