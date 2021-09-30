SHELL := /bin/bash

.PHONY: all pages clean

TEMPLATE= template.html
PAGES= index faq releases screenshots

PUBLICDIR= ../public
OUTPUTDIR= ../dist

all: clean pages

pages:
	mkdir ${OUTPUTDIR}
	cp -r ${PUBLICDIR}/* ${OUTPUTDIR}
	for p in ${PAGES}; do \
		template=$$(<${TEMPLATE}); \
		content=$$(<$$p.tmpl); \
		echo $${template/MAINCONTENT/$$content} > ${OUTPUTDIR}/$$p.html; \
	done

clean:
	rm -rf ${OUTPUTDIR}
