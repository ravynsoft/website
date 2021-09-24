.PHONY: all pages clean

HEADER= header.html
FOOTER= footer.html
PAGES= index faq releases screenshots

PUBLICDIR= ../public
OUTPUTDIR= ../dist

all: clean pages

pages:
	mkdir ${OUTPUTDIR}
	cp -r ${PUBLICDIR}/* ${OUTPUTDIR}
	for p in ${PAGES}; do \
		cat ${HEADER} $$p.tmpl ${FOOTER} > ${OUTPUTDIR}/$$p.html; \
	done

clean:
	rm -rf ${OUTPUTDIR}
