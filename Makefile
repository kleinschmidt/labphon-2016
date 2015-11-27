all: abstract.pdf
%.pdf: %.Rmd
	Rscript -e "rmarkdown::render('$<', output_format=rmarkdown::pdf_document(keep_tex=TRUE))"
	texcount $(patsubst %.pdf,%.tex,$@)
