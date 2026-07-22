// ==========================================
// Get in Touch Page Logic
// ==========================================
import { API } from '../services/api.js';
import { UI } from '../utils/ui.js';

export const Contact = {
  async init() {
    this.container = document.querySelector('#contact-shelters-grid');
    if (!this.container) return;

    UI.showLoading(this.container);

    try {
            const data = await API.getOrgs(12);
      this.renderShelters(data);
    } catch (error) {
      console.error('Failed to load shelters:', error);
      UI.showError(this.container, 'Failed to load shelter contact info. Please try again later.');
    }
  },

  renderShelters(data) {
    const orgs = data.data || [];
    if (orgs.length === 0) {
      UI.showEmpty(this.container, 'No shelters found.');
      return;
    }

    this.container.innerHTML = '';
        orgs.forEach(org => {
      this.container.appendChild(UI.createShelterContactCard(org));
    });
  },
};