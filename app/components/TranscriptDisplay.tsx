import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TranscriptSegment } from '../types';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';

interface TranscriptDisplayProps {
  transcript: TranscriptSegment[];
  currentTime: number;
}

export const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({
  transcript,
  currentTime,
}) => {
  const getCurrentSegmentIndex = (): number => {
    return transcript.findIndex(
      (segment) => currentTime >= segment.startTime && currentTime < segment.endTime
    );
  };

  const currentIndex = getCurrentSegmentIndex();
  const currentSegment = currentIndex >= 0 ? transcript[currentIndex] : transcript[0];
  const nextSegment = currentIndex >= 0 && currentIndex < transcript.length - 1
    ? transcript[currentIndex + 1]
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.currentTextContainer}>
        <Text style={styles.currentText}>{currentSegment?.text || ''}</Text>
      </View>
      {nextSegment && (
        <View style={styles.nextTextContainer}>
          <Text style={styles.nextText}>{nextSegment.text}</Text>
        </View>
      )}
      <ScrollView style={styles.fullTranscript} showsVerticalScrollIndicator={false}>
        {transcript.map((segment, index) => (
          <Text
            key={index}
            style={[
              styles.transcriptLine,
              index === currentIndex && styles.transcriptLineActive,
            ]}
          >
            {segment.text}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  currentTextContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  currentText: {
    color: colors.white,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
    lineHeight: 32,
  },
  nextTextContainer: {
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  nextText: {
    color: colors.gray,
    fontSize: typography.sizes.md,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  fullTranscript: {
    flex: 1,
    marginTop: spacing.lg,
  },
  transcriptLine: {
    color: colors.gray,
    fontSize: typography.sizes.sm,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  transcriptLineActive: {
    color: colors.primary,
    fontWeight: typography.weights.semibold,
  },
});
