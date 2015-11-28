all: what_do_you_expect_from_an_unfamiliar_talker.pdf

what_do_you_expect_from_an_unfamiliar_talker.pdf: abstract.pdf
	cp $^ $@

%.pdf: %.Rmd
	Rscript -e "rmarkdown::render('$<', output_format=rmarkdown::pdf_document(keep_tex=TRUE))"
	texcount $(patsubst %.pdf,%.tex,$@)
