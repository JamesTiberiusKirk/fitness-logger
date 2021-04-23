#!/bin/sh

find ./appendix -name "*.*" -printf "\\item %p.  \n"> ./appendicies_list_output.tex
