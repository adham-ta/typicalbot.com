import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const policiesDirectory = join(process.cwd(), '_policies', 'policies');

export const getPolicySlugs = () => {
    return fs.readdirSync(policiesDirectory);
};

export const getPolicyBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(policiesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);

    interface Items {
        [key: string]: string;
    }

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }

        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
};

export const getAllPolicies = (fields: string[] = []) => {
    const slugs = getPolicySlugs();
    return slugs.map((slug) => getPolicyBySlug(slug, fields));
};
