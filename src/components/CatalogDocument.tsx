import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { products, categories } from '../data/products';
import { fabrics } from '../data/fabrics';
import { technologies } from '../data/technologies';
import navraLogo from '../assets/navra_final_logo_crop.png';

// Color mapping for swatches
const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#FFFFFF',
  'Navy': '#000080',
  'Grey': '#808080',
  'Maroon': '#800000',
  'Red': '#CC0000',
  'Blue': '#0000FF',
  'Green': '#008000',
  'Yellow': '#FFCC00',
  'Heather Grey': '#D3D3D3', 
  'Royal Blue': '#4169E1',
  'Pink': '#FFC0CB',
  'Lavender': '#E6E6FA',
  'Teal': '#008080',
  'Beige': '#F5F5DC',
  'Olive': '#808000',
  'Charcoal': '#36454F',
  'Cream': '#FFFDD0',
  'Sage Green': '#B2AC88',
  'Sky Blue': '#87CEEB',
  'Neon Green': '#39FF14',
  'Electric Blue': '#7DF9FF',
  'Burgundy': '#800020',
  'Peach': '#FFE5B4',
  'Light Grey': '#D3D3D3',
  'Mint': '#98FF98',
  'Grey Melange': '#BEBEBE',
  'Khaki': '#F0E68C',
  'Camouflage': '#556B2F',
  'Pink/Black': '#FFC0CB',
  'All Black': '#000000',
  'Grey/White': '#808080',
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#edebdc',
    fontFamily: 'Helvetica',
    paddingBottom: 50, // space for footer
  },
  // Header
  header: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    width: 80,
    height: 'auto',
  },
  headerText: {
    fontSize: 10,
    color: '#666',
  },
  
  // Cover Page
  coverPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverLogo: {
    width: 250,
    marginBottom: 30,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  coverSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 60,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  coverInfoBox: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    width: '100%',
  },
  coverContact: {
    fontSize: 12,
    marginTop: 8,
    color: '#444',
  },

  // Category Header
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    textTransform: 'uppercase',
  },
  
  // Product List Item
  productItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#edebdc',
    padding: 10,
    height: 300, // Slightly increased to fit new content
  },
  imageSection: {
    width: '45%',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    height: 280, 
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  infoSection: {
    width: '50%',
    justifyContent: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  productDesc: {
    fontSize: 10,
    color: '#333',
    marginBottom: 12,
    lineHeight: 1.4,
  },
  
  // Customizable Section
  customizableBox: {
    backgroundColor: '#e6e2d6', // Slightly darker beige
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  customizableText: {
    fontSize: 9,
    color: '#000',
    lineHeight: 1.4,
  },
  // Options List
  optionGroup: {
    marginBottom: 6,
  },
  optionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  optionValue: {
    fontSize: 9,
    color: '#444',
    lineHeight: 1.3,
  },
  
  // Legacy Color Styles
  colorSwatches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  colorSwatchContainer: {
    alignItems: 'center',
    width: 26,
  },
  colorSwatch: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 2,
  },
  colorName: {
    fontSize: 5,
    color: '#666',
    textAlign: 'center',
  },

  // Fabrics & Tech
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12, // Increased gap for better alignment
  },
  fabricCard: {
    width: '30%',
    marginBottom: 10, // Reduced margin
  },
  fabricImageWrapper: {
    height: 90,
    marginBottom: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fabricImageWrapperLarge: {
    height: 130, // Reduced from 140 to prevent overflow
    marginBottom: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fabricImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  fabricName: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    textAlign: 'center',
  },
  fabricDesc: {
    fontSize: 8,
    color: '#666',
    textAlign: 'center',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 8,
    color: '#999',
  },
});

const CatalogDocument = () => {
  // Group products
  const productsByCategory = categories.map(cat => {
    const categoryProducts = products.filter(p => p.category === cat.name);
    if (categoryProducts.length === 0) return null;
    return {
      name: cat.name,
      products: categoryProducts
    };
  }).filter(Boolean);

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.coverPage}>
          <Image src={navraLogo} style={styles.coverLogo} />
          <Text style={styles.coverTitle}>PRODUCT CATALOG</Text>
          <Text style={styles.coverSubtitle}>PREMIUM APPAREL MANUFACTURING & SOURCING</Text>
          
          <View style={styles.coverInfoBox}>
            <Text style={styles.coverContact}>Email: admin@thenavra.in</Text>
            <Text style={styles.coverContact}>Phone: +91 7680943044</Text>
            <Text style={styles.coverContact}>Website: www.thenavra.in</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© {new Date().getFullYear()} Navra</Text>
          <Text style={styles.footerText}>www.thenavra.in</Text>
        </View>
      </Page>

      {/* Products Pages */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={navraLogo} style={{ width: 60 }} />
          <Text style={styles.headerText}>Products Collection</Text>
        </View>

        {productsByCategory.map((category) => (
          <View key={category?.name}>
            {category?.products.map((product, index) => (
              <View key={product.id} wrap={false}>
                {index === 0 && (
                  <Text style={styles.categoryTitle}>{category?.name}</Text>
                )}
                <View style={styles.productItem}>
                  <View style={styles.imageSection}>
                    {product.image ? (
                        <Image src={product.image} style={styles.productImage} />
                    ) : null}
                  </View>
                  <View style={styles.infoSection}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDesc}>
                      {product.description || 'Premium quality apparel designed for comfort and durability.'}
                    </Text>
                    
                    {/* New Customizable Section Layout */}
                    <View style={styles.customizableBox}>
                      <Text style={styles.customizableText}>
                        • 100% customizable — Fabric, GSM, fit, sizing, colors, trims, printing, embroidery & private labeling.
                      </Text>
                    </View>

                    <View style={styles.optionGroup}>
                      <Text style={styles.optionLabel}>Fabric Options:</Text>
                      <Text style={styles.optionValue}>• Cotton • Polyester • Blends • Fleece • Terry • Custom GSM</Text>
                    </View>

                    <View style={styles.optionGroup}>
                      <Text style={styles.optionLabel}>Colors:</Text>
                      <Text style={styles.optionValue}>• Any Pantone or custom shades</Text>
                    </View>

                    <View style={styles.optionGroup}>
                      <Text style={styles.optionLabel}>Sizes:</Text>
                      <Text style={styles.optionValue}>• Youth to Plus size (XXS - 5XL)</Text>
                    </View>

                    <View style={styles.optionGroup}>
                      <Text style={styles.optionLabel}>MOQs:</Text>
                      <Text style={styles.optionValue}>• Small or bulk runs available</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        <Text style={{ position: 'absolute', bottom: 20, right: 30, fontSize: 9, color: '#aaa' }} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>

      {/* Fabrics Page 1 (First 9) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={navraLogo} style={{ width: 60 }} />
          <Text style={styles.headerText}>Fabrics Collection</Text>
        </View>

        <Text style={styles.sectionTitle}>Our Fabrics</Text>
        <Text style={{ fontSize: 10, color: '#666', textAlign: 'center', marginBottom: 20 }}>
            We offer a wide range of premium fabrics. If you don't see what you need, we can source it for you.
        </Text>
        <View style={styles.grid}>
          {fabrics.slice(0, 9).map((fabric, index) => (
            <View key={index} style={styles.fabricCard} wrap={false}>
              <View style={styles.fabricImageWrapperLarge}>
                {fabric.image ? (
                    <Image src={fabric.image} style={styles.fabricImage} />
                ) : null}
              </View>
              <Text style={styles.fabricName}>{fabric.name}</Text>
              <Text style={styles.fabricDesc}>{fabric.description}</Text>
            </View>
          ))}
        </View>

        <Text style={{ position: 'absolute', bottom: 20, right: 30, fontSize: 9, color: '#aaa' }} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>

      {/* Fabrics Page 2 (Next 9) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={navraLogo} style={{ width: 60 }} />
          <Text style={styles.headerText}>Fabrics Collection</Text>
        </View>

        <View style={{ marginTop: 10 }} /> 
        <View style={styles.grid}>
          {fabrics.slice(9, 18).map((fabric, index) => (
            <View key={index} style={styles.fabricCard} wrap={false}>
              <View style={styles.fabricImageWrapperLarge}>
                {fabric.image ? (
                    <Image src={fabric.image} style={styles.fabricImage} />
                ) : null}
              </View>
              <Text style={styles.fabricName}>{fabric.name}</Text>
              <Text style={styles.fabricDesc}>{fabric.description}</Text>
            </View>
          ))}
        </View>

        <Text style={{ position: 'absolute', bottom: 20, right: 30, fontSize: 9, color: '#aaa' }} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>

      {/* Technology Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={navraLogo} style={{ width: 60 }} />
          <Text style={styles.headerText}>Manufacturing Technology</Text>
        </View>

        <Text style={styles.sectionTitle}>Printing & Embroidery</Text>
        <Text style={{ fontSize: 10, color: '#666', textAlign: 'center', marginBottom: 20 }}>
            State-of-the-art technology for all your customization needs.
        </Text>
        <View style={styles.grid}>
          {technologies.map((tech, index) => (
            <View key={index} style={styles.fabricCard} wrap={false}>
              <View style={styles.fabricImageWrapper}>
                {tech.image ? (
                    <Image src={tech.image} style={styles.fabricImage} />
                ) : null}
              </View>
              <Text style={styles.fabricName}>{tech.name}</Text>
            </View>
          ))}
        </View>

        <Text style={{ position: 'absolute', bottom: 20, right: 30, fontSize: 9, color: '#aaa' }} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
};

export default CatalogDocument;
