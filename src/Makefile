HEADER= header.html
FOOTER= footer.html
OBJDIR= $(shell pwd)/..
PAGES= index faq releases screenshots


pages:
	for p in ${PAGES}; do \
		cat ${HEADER} $$p.tmpl ${FOOTER} > ${OBJDIR}/$$p.html; \
	done
