export const myStructure = (S: any) =>
    S.list()
        .title('Website Management')
        .items([
            // Page Content - Direct Editor (Singleton)
            S.listItem()
                .title('Page Content')
                .id('pageContent')
                .child(
                    S.editor()
                        .id('pageContent')
                        .schemaType('pageContent')
                        .documentId('pageContent')
                        .title('Main Page Settings')
                ),
            S.divider(),
            // Blog Posts - Standard List
            S.listItem()
                .title('Blog Posts')
                .id('blogPosts')
                .child(
                    S.documentTypeList('blogPost')
                        .title('All Articles')
                ),
        ]);
