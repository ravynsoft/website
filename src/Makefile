.PHONY: all pages clean

HEADER= header.html
FOOTER= footer.html
PAGES= index faq releases screenshots

all: clean pages

pages:
	for p in ${PAGES}; do \
		cat ${HEADER} $$p.tmpl ${FOOTER} > ../$$p.html; \
	done

clean:
	for p in ${PAGES}; do \
		rm -f ../$$p.html; \
	done
