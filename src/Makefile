HEADER= header.html
FOOTER= footer.html
PAGES= index faq releases screenshots


pages:
	for p in ${PAGES}; do \
		cat ${HEADER} $$p.tmpl ${FOOTER} > ../$$p.html; \
	done
