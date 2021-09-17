PAGES = index faq releases screenshots
TEMPLATE = template.html

pages:
	$(foreach p,$(PAGES),$(file > ../$(p).html,$(subst @MAINCONTENT@,$(file < $(p).tmpl),$(file < $(TEMPLATE)))))
