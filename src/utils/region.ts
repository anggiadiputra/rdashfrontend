import { apiFetch } from './api';

/**
 * Utility helper to fetch Indonesian administrative regions from local backend proxy
 */

export interface RegionItem {
  id: string;
  name: string;
}

export async function fetchProvinces(): Promise<RegionItem[]> {
  try {
    return await apiFetch('/api/auth/regions/provinces', { requireAuth: false });
  } catch (err) {
    throw new Error('Gagal mengambil data provinsi');
  }
}

export async function fetchRegencies(provinceId: string): Promise<RegionItem[]> {
  try {
    return await apiFetch(`/api/auth/regions/regencies/${provinceId}`, { requireAuth: false });
  } catch (err) {
    throw new Error('Gagal mengambil data kabupaten/kota');
  }
}

export async function fetchDistricts(regencyId: string): Promise<RegionItem[]> {
  try {
    return await apiFetch(`/api/auth/regions/districts/${regencyId}`, { requireAuth: false });
  } catch (err) {
    throw new Error('Gagal mengambil data kecamatan');
  }
}

export async function fetchVillages(districtId: string): Promise<RegionItem[]> {
  try {
    return await apiFetch(`/api/auth/regions/villages/${districtId}`, { requireAuth: false });
  } catch (err) {
    throw new Error('Gagal mengambil data kelurahan');
  }
}

/**
 * Initialize cascading dropdowns for Province, Regency, District, and Village
 */
export function initRegionDropdowns(elements: {
  provinceSelect: HTMLSelectElement;
  regencySelect: HTMLSelectElement;
  districtSelect: HTMLSelectElement;
  villageSelect: HTMLSelectElement;
  onSelectedValuesChange?: (values: {
    province: string;
    regency: string;
    district: string;
    village: string;
  }) => void;
}) {
  const { provinceSelect, regencySelect, districtSelect, villageSelect, onSelectedValuesChange } = elements;

  let currentProvinceName = '';
  let currentRegencyName = '';
  let currentDistrictName = '';
  let currentVillageName = '';

  const triggerChange = () => {
    if (onSelectedValuesChange) {
      onSelectedValuesChange({
        province: currentProvinceName,
        regency: currentRegencyName,
        district: currentDistrictName,
        village: currentVillageName
      });
    }
  };

  // Populate Provinces
  fetchProvinces()
    .then((provinces) => {
      provinceSelect.innerHTML = '<option value="">Pilih Provinsi</option>';
      provinces.forEach((p) => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.name;
        provinceSelect.appendChild(option);
      });
    })
    .catch((err) => console.error('Error loading provinces:', err));

  // Province change listener
  provinceSelect.addEventListener('change', async () => {
    const provinceId = provinceSelect.value;
    const selectedOption = provinceSelect.options[provinceSelect.selectedIndex];
    currentProvinceName = selectedOption ? selectedOption.textContent || '' : '';
    
    // Reset lower dropdowns
    regencySelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';
    regencySelect.disabled = true;
    districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    districtSelect.disabled = true;
    villageSelect.innerHTML = '<option value="">Pilih Kelurahan</option>';
    villageSelect.disabled = true;

    currentRegencyName = '';
    currentDistrictName = '';
    currentVillageName = '';
    triggerChange();

    if (!provinceId) return;

    try {
      const regencies = await fetchRegencies(provinceId);
      regencySelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';
      regencies.forEach((r) => {
        const option = document.createElement('option');
        option.value = r.id;
        option.textContent = r.name;
        regencySelect.appendChild(option);
      });
      regencySelect.disabled = false;
    } catch (err) {
      console.error('Error loading regencies:', err);
    }
  });

  // Regency change listener
  regencySelect.addEventListener('change', async () => {
    const regencyId = regencySelect.value;
    const selectedOption = regencySelect.options[regencySelect.selectedIndex];
    currentRegencyName = selectedOption ? selectedOption.textContent || '' : '';

    districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    districtSelect.disabled = true;
    villageSelect.innerHTML = '<option value="">Pilih Kelurahan</option>';
    villageSelect.disabled = true;

    currentDistrictName = '';
    currentVillageName = '';
    triggerChange();

    if (!regencyId) return;

    try {
      const districts = await fetchDistricts(regencyId);
      districts.forEach((d) => {
        const option = document.createElement('option');
        option.value = d.id;
        option.textContent = d.name;
        districtSelect.appendChild(option);
      });
      districtSelect.disabled = false;
    } catch (err) {
      console.error('Error loading districts:', err);
    }
  });

  // District change listener
  districtSelect.addEventListener('change', async () => {
    const districtId = districtSelect.value;
    const selectedOption = districtSelect.options[districtSelect.selectedIndex];
    currentDistrictName = selectedOption ? selectedOption.textContent || '' : '';

    villageSelect.innerHTML = '<option value="">Pilih Kelurahan</option>';
    villageSelect.disabled = true;

    currentVillageName = '';
    triggerChange();

    if (!districtId) return;

    try {
      const villages = await fetchVillages(districtId);
      villages.forEach((v) => {
        const option = document.createElement('option');
        option.value = v.id;
        option.textContent = v.name;
        villageSelect.appendChild(option);
      });
      villageSelect.disabled = false;
    } catch (err) {
      console.error('Error loading villages:', err);
    }
  });

  // Village change listener
  villageSelect.addEventListener('change', () => {
    const selectedOption = villageSelect.options[villageSelect.selectedIndex];
    currentVillageName = selectedOption ? selectedOption.textContent || '' : '';
    triggerChange();
  });
}
