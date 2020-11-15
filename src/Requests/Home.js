import fetcher from '~/Services/Api';

export const GetMarriage = async () => fetcher('/marriage');

export const GetSupplier = async () => fetcher('/supplier');
