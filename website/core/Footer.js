/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <div>

        <div className="custom-footer">
          <div className="footer-content">
              <div className="content-links">
                <p className="title">Áreas do BLiP</p>
                  <a href="#" className="link-footer">Analytics</a>
                  <a href="#" className="link-footer"> Builder</a>
                  <a href="#" className="link-footer">Canais</a>
                  <a href="#" className="link-footer">CRM</a>
                  <a href="#" className="link-footer">Desk</a>
                  <a href="#" className="link-footer">Growth</a>
                  <a href="#" className="link-footer">Help Desk</a>
                  <a href="#" className="link-footer">I.A.</a>
              </div>
               
              <div className="content-links">
                <p className="title">Recursos</p>
                  <a href="https://docs.blip.ai/" target="_blank" className="link-footer">API Reference</a>
                  <a href="/changelog" className="link-footer">Changelogs</a>
                  <a href="/faq" className="link-footer">Faq</a>
                  <a href="https://github.com/takenet" target="_blank" className="link-footer">Github</a>
                  <a href="#" className="link-footer">Status</a>
              </div>  

              <div className="content-links">
                  <p className="title">Cursos</p>
                  <a href="#" className="link-footer">Certificação BLiP</a>
                  <a href="#" className="link-footer">Tutoriais</a>
              </div>

              <div className="content-links">
                  <p className="title">Comunidade</p>
                  <a href="/beta" className="link-footer">BLiP Beta</a>
                  <a href="https://ideas.blip.ai/" target="_blak" className="link-footer">BLiP Ideas</a>
                  {/* <a href="#" className="link-footer">BLiP Lovers</a> */}
                  <a href="http://meetup.blip.ai" target="_blank" className="link-footer">Eventos</a>
                  <a href="https://forum.blip.ai/" target="_blank" className="link-footer">Fórum</a>
              </div>
               
              <div className="content-links">
                  <p className="title">Políticas</p>
                  <a href="#" className="link-footer">LGPD</a>
              </div>

          </div>

          <div>
              <p className="custom-copyright">{this.props.config.copyright}</p>
          </div>

        </div>
      </div>
    );
  }
}

module.exports = Footer;
