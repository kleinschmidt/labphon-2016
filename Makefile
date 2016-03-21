all: kleinschmidt_what_do_you_expect_from_an_unfamiliar_talker.pdf

kleinschmidt_what_do_you_expect_from_an_unfamiliar_talker.pdf: abstract.pdf
	cp $^ $@

%.pdf: %.Rmd template.tex
	Rscript -e "rmarkdown::render('$<', output_format=rmarkdown::pdf_document(keep_tex=TRUE, template='template.tex'))"
	texcount $(patsubst %.pdf,%.tex,$@)
