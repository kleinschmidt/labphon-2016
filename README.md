# What do you expect from an unfamiliar talker?

__Dave F. Kleinschmidt__ & __T. Florian Jaeger__

Talk presented at [LabPhon15](https://www.labphon.org/labphon15/), July 16, 2016, Ithaca, NY.

[Slides](http://davekleinschmidt.com/labphon-2016/slides.html) and [RMarkdown source](slides.Rmd).

## Building slides

The compiled HTML slides are included in this repository. You should in principle be able to build the slides from the RMarkdown source file ([slides.Rmd]()). The data is available from the [`supunsup`](https://github.com/kleinschmidt/phonetic-sup-unsup) R package, and the model Stan code is in [`beliefupdatr`](https://github.com/kleinschmidt/beliefupdatr). Install them with:

```r
library(devtools)
install_github('kleinschmidt/phonetic-sup-unsup')
install_github('kleinschmidt/beliefupdatr')
```

There are other dependencies that you might or might not need to install, see the RMarkdown source. Then to compile the slides:

```bash
$ make slides.html
```

Or in R:

```r
rmarkdown::render('slides.Rmd')
```
